export default class Navigation{

    constructor(arrayOfPages){
        this.pages = arrayOfPages;
    }

    CheckURL(){
        this.pages.forEach(page => {
            if(page.id === window.location.pathname.replace("/hwgit/",'')){
                page.className = 'active';
            }
            else{
                page.className = null;
            }
        })
        console.log(window.location.pathname.replace("/hwgit/",''));
    }
}