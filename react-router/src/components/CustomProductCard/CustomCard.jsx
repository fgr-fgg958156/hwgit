import {Button, Card, Col, Row} from "react-bootstrap";
import RatingStars from "./RatingStars.jsx";

const CustomCard = ({id, name, price, description, category, imageUrl, rating, onClick}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: '200px', objectFit: 'cover'}}/>
            <Card.Body>
                <Card.Title>{name.substring(0, 21) + (name.length > 21 ? "..." : "")}</Card.Title>
                <Card.Subtitle>{price}$</Card.Subtitle>
                <Card.Text>{description.substring(0, 47) + (description.length > 47 ? "..." : "")}</Card.Text>
                <Card.Subtitle>{category}</Card.Subtitle>
                <Row className="mt-4">
                    <Col>
                        <Button variant="primary" onClick={onClick}>Оглянути</Button>
                    </Col>
                    <Col>
                        <RatingStars rate={rating} id={id} maxRate={5}/>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CustomCard;