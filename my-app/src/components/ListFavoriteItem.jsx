import {Button, Col, ListGroup, Row} from "react-bootstrap";
import {currWeatherDataName, favWeatherDataName, getLocStFavWN, searchData} from "./config/ConfigValue";
import {useState} from "react";


function ListFavoriteItem({location, weather, index, setWeatherData, setFavData, setIsOpened}) {

    const [isRemoved, setIsRemoved] = useState(false);

    const remove = () => {
        const data = JSON.parse(getLocStFavWN()) || [];
        const newData = data.filter((item) => item.id !== index);
        setIsRemoved(true)
        localStorage.setItem(favWeatherDataName, JSON.stringify(newData))
    }

    const open = async () => {
        const data = JSON.parse(getLocStFavWN()) || [];
        const element = data.find(item => item.id === index);
        if(!element) return;

        const newDataElement = await searchData(element.name)
        const updatedElement = {...element, ...newDataElement, id: index};
        const newData = data.map((item) => item.id === index ? updatedElement : item);

        localStorage.setItem(favWeatherDataName, JSON.stringify(newData));
        localStorage.setItem(currWeatherDataName, JSON.stringify({...element, isOpened: true}));

        setWeatherData(newDataElement);
        setFavData(newData);
        setIsOpened(true);
    }

    return (
        !isRemoved ?
        <ListGroup.Item key={index}>
                <Row>
                    <Col>
                        <Row style={{padding: 5}}>{location}</Row>
                        <Row style={{padding: 5}}><h4>{weather}</h4></Row>
                    </Col>
                    <Col>
                        <Row style={{padding: 5}}><Button variant={"success"} onClick={open} >open</Button></Row>
                        <Row style={{padding: 5}}><Button variant={"danger"} onClick={remove} >remove</Button></Row>
                    </Col>
                </Row>
        </ListGroup.Item>
            : null
    )
}

export default ListFavoriteItem;