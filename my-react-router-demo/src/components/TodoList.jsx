import {Container} from "react-bootstrap";
import TodoCard from "./TodoCard.jsx";

const TodoList = ({data}) => {
    return (
        <Container className="d-flex flex-row flex-wrap gap-3">
            {
                data.map(item => (
                    <TodoCard key={item.id} id={item.id} status={item.status} createdAt={item.createdAt} title={item.titleName} description={item.description}/>
                ))
            }
        </Container>
    )
}

export default TodoList