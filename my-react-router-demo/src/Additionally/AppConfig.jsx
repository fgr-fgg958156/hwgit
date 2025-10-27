export const maxSymbolsInCard = 84;

export const statusSolution = (status, variable1, variable2) => {
    return status === "completed" ? variable1 : variable2
}

export const localStorageName = "todoList"
export const localStorageCurrentObjectPath = "currentTodo"

export const basicObjectStructure = {
    id: null,
    titleName: "",
    description: "",
    status: "active",
    createdAt: null
}

export const createNewTodoObject = (id, title, description, status, date) => {
    return {
        id: id,
        titleName: title,
        description: description,
        status: status ?? "active",
        createdAt: date ?? new Date().toLocaleString()
    }
}

export const deleteTodo = (id) => {
    const currentData = JSON.parse(localStorage.getItem(localStorageName)) || [];
    const newData = currentData.filter((item) => item.id !== id);
    localStorage.setItem(localStorageName, JSON.stringify(newData))
}
export const editTodoStatus = (id) => {
    const currentData = JSON.parse(localStorage.getItem(localStorageName)) || [];
    const currentObject = currentData.find((item) => item.id === id);
    if(!currentObject) return;
    currentObject.status = currentObject.status === "active" ? "completed" : "active";
    localStorage.setItem(localStorageName, JSON.stringify(currentData))
}

export const generateId = (data) => {
    const ids = data.map(item => item.id ?? -1)
    let id = 0;
    while(ids.includes(id)) {
        id++;
    }
    return id
}

export const saveData = (dataPath) =>{
    return localStorage.getItem(dataPath) ? JSON.parse(localStorage.getItem(dataPath)) : [];
}

export const setCurrentTodo = (id) => {
    const currentData = JSON.parse(localStorage.getItem(localStorageName)) || [];
    const currentObject = currentData.find((item) => item.id === id);
    localStorage.setItem(localStorageCurrentObjectPath, JSON.stringify(currentObject))
}