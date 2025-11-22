import {Button, Card, Col, Row} from "react-bootstrap";

const CustomSmallCard = ({name, imageUrl, onClick}) => {
    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img variant="top" src={imageUrl} style={{ width: '100%', height: '200px', objectFit: 'cover'}}/>
            <Card.Body>
                <Card.Title>{name.substring(0, 11) + (name.length > 11 ? "..." : "")}</Card.Title>
                <Row className="mt-4">
                    <Col>
                        <Button variant="primary" onClick={onClick}>Відкрити</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default CustomSmallCard;