class View {
    constructor(model) {
        this.model = model;
        this.taskBoard = document.querySelector("#task-board");
        this.filter = document.querySelector("#filter");
        this.filter.addEventListener('change', (e) => {this.Repaint()});
        this.count = document.querySelector("#count");
    }

    Repaint(){
        const data = this.model.GetData;
        this.taskBoard.innerHTML = "";
        this.count.innerHTML = `Active: ${data.filter(el => el.status === "Active").length}; Completed: ${data.filter(el => el.status === "Completed").length};`;

        data.forEach((element) => {
            const body = document.createElement("li");
            body.id = element.id;
            body.className = "card";
            this.#cardStructure(element, body);
            if((this.filter.value === "All") ||
                (this.filter.value === "Active" && element.status === "Active") ||
                (this.filter.value === "Completed" && element.status === "Completed"))
                this.taskBoard.append(body);
        })
    }

    RepaintByElement(element){
        const data = this.model.GetData;
        this.count.innerHTML = `Active: ${data.filter(el => el.status === "Active").length}; Completed: ${data.filter(el => el.status === "Completed").length};`;
        element.innerHTML = '';
        this.#cardStructure(this.model.GetElement(Number(element.id)), element);
        if(element.innerHTML === '')
            this.taskBoard.removeChild(element);
    }

    #cardStructure(element, body){
        if(element === null || element === undefined) return;
        const title = document.createElement("div");
        title.className = `title ${element.status === "Completed" ? "completed" : ""}`;
        title.innerHTML = element.text;
        body.appendChild(title);
        const buttonsList = document.createElement("div");
        buttonsList.className = "buttons";
        buttonsList.innerHTML = `
                    <button type="submit" class="done">${element.status === "Completed" ? "Undo" : "Done"}</button>
                    <button type="submit" class="delete">Delete</button>`;
        body.appendChild(buttonsList);
    }
}

export default View;