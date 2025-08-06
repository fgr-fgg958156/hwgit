'use strict';
import HistoryTracker from "./HistoryTracker.js";

const historyTracker = new HistoryTracker();

const titleText = document.getElementById('title');
function Update(){
    if(history.state != null)
        titleText.innerText = history.state.page;
}

const backButton = document.getElementById('back');
backButton.addEventListener('click', function(){
    historyTracker.back();
})

const goButton = document.getElementById('go');
goButton.addEventListener('click', function(){
    historyTracker.go();
})

const createButton = document.getElementById('create');
createButton.addEventListener('click', function(){
    historyTracker.push(`?page=${history.length}`);
    Update();
})

window.addEventListener('popstate', function(event) {
    if (event.state) {
        console.log("Поточний стан:", event.state);
        Update();
        historyTracker.checkWhichPageIVisited();
        console.log(historyTracker.getURLsArray());
    } else {
        console.log("Немає стану для цієї URL.");
    }
});


