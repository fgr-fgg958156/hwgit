import {useLocation, useNavigate} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import React, {useState} from "react";
import BaseForm from "../components/BaseForm.jsx";
import {createNewTodoObject, localStorageName} from "../Additionally/AppConfig.jsx";

const TaskDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const task = location.state;
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.titleName);
    const [description, setDescription] = useState(task.description);

    const editTodo = () => {
        const editedObject = createNewTodoObject(task.id, title, description, task.status, task.createdAt);
        const currentData = JSON.parse(localStorage.getItem(localStorageName)) || [];
        const newData = currentData.filter((item) => item.id !== task.id);
        localStorage.setItem(localStorageName, JSON.stringify([...newData, editedObject]))
        navigate(-1)
    }

    return(
        isEditing
            ?
            <Container>
                <Button variant="primary" onClick={()=>navigate(-1)}>Back</Button>
                <BaseForm setTitle={setTitle} setDescription={setDescription} onClick={editTodo} titleValue={title} descriptionValue={description} buttonText={"Apply"}/>
            </Container>
            :
            <Container>
                <div className="d-flex gap-3 mb-5">
                    <Button variant="primary" onClick={()=>navigate(-1)}>Back to list</Button>
                    <Button variant="primary" onClick={()=>{setIsEditing(true)}}>Edit</Button>
                </div>
                <h1 style={{ overflowWrap: "anywhere" }}>Title Name: {task.titleName}</h1>
                <h3 className="mb-2 text-muted">Created At: {task.createdAt}</h3>
                <h3 className="mb-5 text-muted">Status: {task.status}</h3>
                <p style={{ overflowWrap: "anywhere" }}>{task.description}</p>
            </Container>
    )
}

export default TaskDetails;