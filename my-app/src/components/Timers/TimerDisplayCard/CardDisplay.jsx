import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardDisplay({name, value, startOnClick, stopOnClick, resetOnClick, unmountOnClick, classNameForValue}) {
    return (
        <Card className={"m-3"}>
            <Card.Header as="h5">{name}</Card.Header>
            <Card.Body>
                <Row>
                <Col className={`d-flex justify-content-center align-items-center ${classNameForValue}`}><Card.Title>{value}</Card.Title></Col>
                <Col>
                    <Col className={"m-3"}><Button variant="primary" onClick={startOnClick}>Start</Button></Col>
                    <Col className={"m-3"}><Button variant="primary" onClick={stopOnClick}>Stop</Button></Col>
                    <Col className={"m-3"}><Button variant="primary" onClick={resetOnClick}>Reset</Button></Col>
                    <Col className={"m-3"}><Button variant="secondary" onClick={unmountOnClick}>Unmount Timer</Button></Col>
                </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CardDisplay;