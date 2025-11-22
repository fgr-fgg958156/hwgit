import Form from "react-bootstrap/Form";
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import CustomInput from "../components/FormComponents/CustomInput.jsx";
import {useNavigate} from "react-router-dom";

const OrderForm = () => {
    const [validated, setValidated] = useState(false);
    const [data, ] = useState(JSON.parse(localStorage.getItem("cartList")|| "[]"));
    const [finalCost, setFinalCost] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let finalCostValue = 0;
        for (let i = 0; i < data.length; i++) {
            finalCostValue += data[i].price * data[i].count;
        }
        setFinalCost(finalCostValue.toFixed(2));
    }, [data]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Row className="mb-3">
                        <CustomInput title={"Ім'я"} md={"4"} placeholder={"ім'я"} type={"text"} invalidFeedback={"Вкажіть Ваше ім'я."} validFeedback={"Чудово!"} prepend={{active: false, text: ""}}/>
                        <CustomInput title={"Прізвище"} md={"4"} placeholder={"прізвище"} type={"text"} invalidFeedback={"Вкажіть Ваше прізвище."} validFeedback={"Відмінно!"} prepend={{active: false, text: ""}}/>
                    </Row>
                    <Row>
                        <CustomInput title={"Електронна адреса"} md={"4"} placeholder={"ел. адреса"} type={"text"} invalidFeedback={"Вкажіть дійсну електронну адресу."} validFeedback={"Бездоганно!"} prepend={{active: true, text: "@"}}/>
                        <CustomInput title={"Телефон"} md={"4"} placeholder={"номер телефону"} type={"number"} invalidFeedback={"Вкажіть дійсний номер телефону."} validFeedback={"Бездоганно!"} prepend={{active: true, text: "+380"}}/>
                    </Row>
                    <Row className="mb-3">
                        <CustomInput title={"Місто"} md={"4"} placeholder={"місто"} type={"text"} invalidFeedback={"Вкажіть дійсне місто."} validFeedback={"Надзвичайно!"} prepend={{active: false, text: ""}}/>
                        <CustomInput title={"Область"} md={"4"} placeholder={"область"} type={"text"} invalidFeedback={"Вкажіть дійсну область."} validFeedback={"Блискуче!"} prepend={{active: false, text: ""}}/>
                    </Row>
                    <Row>
                        <CustomInput title={"Країна"} md={"3"} placeholder={"країна"} type={"text"} invalidFeedback={"Вкажіть дійсну країну."} validFeedback={"Неймовірно!"} prepend={{active: false, text: ""}}/>
                        <CustomInput title={"Поштовий індекс"} md={"3"} placeholder={"поштовий індекс"} type={"number"} invalidFeedback={"Вкажіть дійсне cvv."} validFeedback={"На славу!"} prepend={{active: false, text: ""}}/>
                        <CustomInput title={"CVV"} md={"2"} placeholder={"cvv"} type={"number"} invalidFeedback={"Вкажіть дійсне cvv."} validFeedback={"Любо!"} prepend={{active: false, text: ""}}/>
                    </Row>
                    <Row className="mb-3">
                        <CustomInput title={"Номер карти"} md={"4"} placeholder={"номер карти"} type={"number"} invalidFeedback={"Вкажіть дійсний номер карти."} validFeedback={"Дивовижно!"} prepend={{active: false, text: ""}}/>
                        <CustomInput title={"Термін дії"} md={"4"} placeholder={"термін дії"} type={"text"} invalidFeedback={"Вкажіть дійсний термін дії."} validFeedback={"Чудесно!"} prepend={{active: false, text: ""}}/>
                        </Row>
                    <Button type="submit" onClick={()=>{alert("все чудово, все надійшло")
                        localStorage.removeItem("cartList");
                        navigate("/");
                    }}>Підтвердити</Button>
                </Col>
                <Col>
                    <Row className="mb-3">
                        <ListGroup>{
                            data.map(item => (
                                <ListGroup.Item key={item.id}>
                                    {item.title} <b>x{item.count}</b> : <b>{(item.price * item.count).toFixed(2)} $</b>
                                </ListGroup.Item>
                            ))
                        }
                            <ListGroup.Item>Підсумкова ціна : <b>{finalCost} $</b></ListGroup.Item>
                        </ListGroup>
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}

export default OrderForm