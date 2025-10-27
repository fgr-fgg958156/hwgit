import {useState} from "react";
import {createNewTodoObject, generateId, localStorageName} from "../Additionally/AppConfig.jsx";
import BaseForm from "./BaseForm.jsx";

function TodoForm({setMainData}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const IsValid = () => {
        return title !== "" && description !== ""
    }

    const NewTodo = () => {
        if(!IsValid()) return
        const currentDataRaw = localStorage.getItem(localStorageName)
        const currentData = currentDataRaw ? JSON.parse(currentDataRaw) : [];
        const id = generateId(currentData);
        const object = createNewTodoObject(id, title, description);
        const newData = [...currentData, {...object, id}]
        localStorage.setItem(localStorageName, JSON.stringify(newData));
        setMainData(newData);
        setTitle("");
        setDescription("");
    }

    return (
        <BaseForm setTitle={setTitle} setDescription={setDescription} onClick={NewTodo} buttonText={"Add"}/>
    )
}

export default TodoForm;