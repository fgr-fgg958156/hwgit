export default class HistoryTracker{
    URLs = [];

    push(url){
        if(typeof url != 'string') return
        history.pushState({page: history.length}, `title of page ${history.length}`, url);
        this.checkWhichPageIVisited();
    }

    go(){
        history.go(1);
    }

    back(){
        history.back();
    }

    checkWhichPageIVisited(){
        const currentURL = window.location.href;

        if(!this.URLs.includes(currentURL)){
            this.URLs.push(currentURL);
        }
    }

    getURLsArray(){
        return this.URLs;
    }
}