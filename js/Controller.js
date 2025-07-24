'use strict';

function Controller(view){
    this.view = view;

    this.init = () =>{
        this.view.update();

        this.view.createTask.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            this.view.addNewTask();
        });

        this.view.clearAllTasks.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            this.view.clearAllTasksFunction();
        });
    }
}