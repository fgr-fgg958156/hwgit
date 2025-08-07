export default class URLParser{

    constructor(url){
        this.url = url;
        this.URLArray = url.split('/').filter(x => x !== "");
    }

    get protocol(){
        if(this.URLArray[0] !== "http:" && this.URLArray[0] !== "https:") return 'wrong protocol';
        return this.URLArray[0];
    }

    get hostname(){
        return this.URLArray[1];
    }

     get path(){
         let pathString = '';
         for(let i = 2; i < this.URLArray.length; i++){
             pathString += '/' + this.URLArray[i];
         }
         return pathString.split('?')[0];
    }

    get queryParams(){
        const queryString = this.url.split('?')[1];
        if(queryString === undefined)
            return {};
        const queryStringArray = queryString.split('&');
        const queryParamsObject = {};
        queryStringArray.forEach(str => {
            const [key, value] = str.split('=');
            queryParamsObject[key] = value;
        })
        return queryParamsObject;
    }
}