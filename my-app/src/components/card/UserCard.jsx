import Card from 'react-bootstrap/Card';
import {basicImageURL} from "../keyConfig";

function UserCard({user}) {
    return (
        <Card style={{ width: '18rem', margin: '1rem'}}>
            <Card.Img variant="top" src={user.image ? URL.createObjectURL(user.image) : basicImageURL} />
            <Card.Body>
                <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                <Card.Text>Age: {user.age}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default UserCard;