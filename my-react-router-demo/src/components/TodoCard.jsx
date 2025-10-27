import {Button, Card, Col, Row} from "react-bootstrap";
import {deleteTodo, editTodoStatus, maxSymbolsInCard, statusSolution} from "../Additionally/AppConfig.jsx";
import React from "react";
import {useNavigate} from "react-router-dom";

const TodoCard = ({id, title, description, status, createdAt}) => {
    const [isDeleted, setDeleted] = React.useState(false);
    const [innerStatus, setInnerStatus] = React.useState(status);
    const navigate = useNavigate();

    function RemoveCard(){
        deleteTodo(id);
        console.log(id)
        setDeleted(true);
    }

    function ChangeStatus(){
        editTodoStatus(id)
        setInnerStatus(innerStatus === "active" ? "completed" : "active");
    }

    function OpenTodo(){
        navigate(`/tasks/${id}`, { state: {
                id: id,
                titleName: title,
                description: description,
                status: innerStatus,
                createdAt: createdAt
            } });
    }

    return (
        isDeleted ? null : <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title style={{textDecoration:statusSolution(innerStatus,"line-through","none")}}>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{createdAt}</Card.Subtitle>
                <Card.Text>
                    {description.length > maxSymbolsInCard ? `${description.substring(0, maxSymbolsInCard)}...` : description}
                </Card.Text>
                <Col>
                    <Row className="p-1"><Button variant="primary" onClick={OpenTodo}>Open</Button></Row>
                    <Row className="p-1"><Button variant="danger" onClick={RemoveCard}>Remove</Button></Row>
                    <Row className="p-1"><Button variant={statusSolution(innerStatus,"danger","success")} onClick={ChangeStatus}>{statusSolution(innerStatus,"Undo","Done")}</Button></Row>
                </Col>
            </Card.Body>
        </Card>
    )
}

export default TodoCard;