class Model {
    db_path_name = 'taskBoard';
    db_structure = ["text", "status"];

    #isValid(object){
        if(typeof(object) !== "object") return false;
        const keys = Object.keys(object);
        if(keys.length !== this.db_structure.length) return false;

        return (typeof object.text === "string" && typeof object.status === "string");
    }

    get GetData(){
        const data = localStorage.getItem(this.db_path_name)
        if(data === null) return [];
        return JSON.parse(data);
    }

    SetElement(obj){
        if(!this.#isValid(obj)) return null;

        const data = this.GetData;

        let id = data.length ? data.at(-1).id + 1 : 1;

        const newData = {...obj, id};
        data.push(newData);
        localStorage.setItem(this.db_path_name, JSON.stringify(data));
    }

    DeleteElement(id){
        const data = this.GetData;
        const index = data.findIndex((element) => element.id === id);
        if(index !== -1)
            data.splice(index, 1);
        localStorage.setItem(this.db_path_name, JSON.stringify(data));
    }

    ChangeStatus(id){
        const data = this.GetData;
        const index = data.findIndex((element) => element.id === id);
        if(index !== -1)
            data[index].status = data[index].status === "Active" ? "Completed" : "Active";
        localStorage.setItem(this.db_path_name, JSON.stringify(data));
    }

    GetElement(id){
        const data = this.GetData;
        const index = data.findIndex((element) => element.id === id);
        if(index !== -1)
            return data[index];
    }
}

export default Model;