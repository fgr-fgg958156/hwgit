"use strict";

const _buttonSwitchTheme = document.getElementById('toggle-theme');

let _theme = false;

const updateTheme = () => {
    if(_theme){
        document.body.classList.add("dark-theme");
    }
    else{
        document.body.classList.remove("dark-theme");
    }
}

const switchTheme = () => {
    _theme = !_theme;
    updateTheme();
}

_buttonSwitchTheme.addEventListener('click', switchTheme);