import Model from "./Model.js";
import View from "./View.js";

class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View(this.model);
        this.input = document.getElementById("taskInput");
        this.createNewTaskButton = document.getElementById("add-new-task");
        this.taskBoard = document.getElementById("task-board");
    }

    init(){
        this.view.Repaint();
        this.createNewTaskButton.addEventListener('click', (e)=>this.#CreateNewTask());
        this.taskBoard.addEventListener("click", (e)=>{
            if(e.target.classList.contains("delete"))
                this.#DeleteTask(e);
            if(e.target.classList.contains("done"))
                this.#CompleteTask(e)
        });
    }

    #CreateNewTask(){
        if(this.input.value === '') return;

        this.model.SetElement({text: this.input.value, status: "Active"});
        this.input.value = "";
        this.view.Repaint();
    }

    #DeleteTask(event){
        this.model.DeleteElement(Number(event.target.closest('li').id));
        this.view.RepaintByElement(event.target.closest('li'));
    }

    #CompleteTask(event){
        this.model.ChangeStatus(Number(event.target.closest('li').id));
        this.view.RepaintByElement(event.target.closest('li'));
    }
}

export default Controller;