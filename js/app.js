'use strict';
import Navigation from "./Navigation.js";

const mainPageLink = document.getElementById('home');
const aboutPageLink = document.getElementById('about');
const contactPageLink = document.getElementById('contact');
const pageTitle = document.getElementById('title');

const arrayOfPages = [mainPageLink, aboutPageLink, contactPageLink]
const newNavigation = new Navigation(arrayOfPages);

// mainPageLink.addEventListener('click', e => {
//     e.preventDefault();
//     history.pushState({page: 'home'}, `title of page home`, 'home');
// })
eventClick(mainPageLink, 'home', 'home', 'home');
eventClick(aboutPageLink, 'about', 'about', 'about');
eventClick(contactPageLink, 'contact', 'contact', 'contact');

function UpdateTitle(){
    pageTitle.innerHTML = window.location.pathname.replace("/hwgit/",'');
}

window.addEventListener('popstate', function(e){
    if(e.state){
        console.log("current state:", e.state);
        newNavigation.CheckURL();
        UpdateTitle();
    }
    else{
        console.warn('this page has no state');
    }
});

function eventClick(pageLink, pageName, pageTitle, pageUrl){
    pageLink.addEventListener('click', e => {
        e.preventDefault();
        history.pushState({page: pageName}, `title of page ${pageTitle}`, pageUrl);
        newNavigation.CheckURL();
        UpdateTitle();
    })
}
