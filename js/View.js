'use strict';

function View(model){
    this.model = model;

    this.todoContainer = document.querySelector('[data-todo-items]');
    this. taskTitle = document.querySelector('#taskTitle');
    this. taskDescription = document.querySelector('#taskDescription');
    this. createTask = document.querySelector('#createTask');
    this. clearAllTasks = document.querySelector('#clearAllTasks');

    this.clearAllTasksFunction = () => {
        this.model.clearAllData();
        this.update();
    }

    this.addNewTask = () => {
        if(this.taskTitle.value === '' || this.taskDescription.value === ''){
            return;
        }

        const TaskValue = `
        <div class="taskWrapper">
            <input type="checkbox" class="form-check-input isFinished" />
            <div class="taskHeading">${this.taskTitle.value}</div>
            <div class="taskDescription">${this.taskDescription.value}</div>
        </div>                                                                                          
    `;

        const newTask = document.createElement('div');
        newTask.className = 'col-4';
        newTask.innerHTML = TaskValue;

        const elementData = {nm: newTask.querySelector('.taskHeading').innerHTML, disc: newTask.querySelector('.taskDescription').innerHTML, comp: newTask.querySelector('.isFinished').checked}

        this.model.setData(elementData);
        this.update();
        this.taskTitle.value = '';
        this.taskDescription.value = '';
    }

    this.update = () =>{
        const AllTasksData = this.model.getData();
        console.log(AllTasksData);
        let allContent = '';
        for(let i = 0; i < AllTasksData.length; i++){
            const IsChecked = AllTasksData[i].comp === true ? 'checked' : '';
            const IsDecorated = IsChecked ? 'line-through' : 'none';
            allContent += `
        <div class="col-4" id="${AllTasksData[i].id}">
            <div class="taskWrapper">
                <input type="checkbox" class="form-check-input isFinished" ${IsChecked}/>
                <div class="taskHeading" style="text-decoration: ${IsDecorated}">${AllTasksData[i].nm}</div>
                <div class="taskDescription">${AllTasksData[i].disc}</div>
                <button class="btn btn-danger deleteItem">Delete</button>
            </div>    
        </div>                                                                                     
        `;
        }

        this.todoContainer.innerHTML = allContent;
        this.floatingAdapter();
    }

    this.floatingAdapter = () =>{
        const AllCheckboxes = document.querySelectorAll('.isFinished');
        const AllDeleteButtons = document.querySelectorAll('.deleteItem');
        AllCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('click', e => {
                const mainContainer = checkbox.parentElement.parentElement;
                const Title = mainContainer.querySelector('.taskHeading');
                if(checkbox.checked) {
                    Title.style.textDecoration = 'line-through';
                }
                else{
                    Title.style.textDecoration = 'none';
                }
                this.model.editItemData(Number(mainContainer.id), Title.innerHTML, mainContainer.querySelector('.taskDescription').innerHTML, mainContainer.querySelector('.isFinished').checked)
                this.update();
            });
        });
        AllDeleteButtons.forEach(button => {
            button.addEventListener('click', e => {
                const mainContainer = button.parentElement.parentElement;
                this.model.removeItemById(Number(mainContainer.id));
                this.update();
            });
        });
    }
}