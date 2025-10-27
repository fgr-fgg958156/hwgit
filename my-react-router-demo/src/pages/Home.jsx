import {Container} from "react-bootstrap";
import TodoForm from "../components/TodoForm.jsx";
import TodoList from "../components/TodoList.jsx";
import {useState} from "react";
import {localStorageName, saveData} from "../Additionally/AppConfig.jsx";

const Home = () => {
    const [mainData, setMainData] = useState(saveData(localStorageName));
    return (
        <>
            <h1>ToDo List Page</h1>
            <TodoForm setMainData={setMainData}/>
            <Container>
                <TodoList data={mainData}/>
            </Container>
        </>
    )
}

export default Home;