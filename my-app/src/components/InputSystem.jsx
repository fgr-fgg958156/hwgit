import React from "react";
import FormControls from "./form/FormControls";
import UserCard from "./card/UserCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const InputSystem = () => {
    const [users, setUsers] = React.useState([]);

    const renderListOfUsers = (usersList) => {
        return usersList.map((user) => (
            <UserCard key={user.id} user={user}/>
        ))
    }

    const addUser = (user) => {
        setUsers(prevState => [...prevState, {...user, id: users.length}]);
    }

    return(
        <Container>
            <Row>
                <Col><FormControls onClick={addUser}/></Col>
                <Col>{renderListOfUsers(users)}</Col>
            </Row>
        </Container>
    );
}

export default InputSystem;