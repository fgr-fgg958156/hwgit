import {Button, Card, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {favWeatherDataName, weatherCodes, createNewDataObject} from "../components/config/ConfigValue";

function WeatherCard({currData, favData, isOpened}) {
    const [data, setData] = useState(currData);
    const [object, setObject] = useState(
        createNewDataObject(data)
    );

    useEffect(() => {
        setData(currData);
        setObject(createNewDataObject(currData))
    }, [currData]);

    const save = () => {
        const oldData = JSON.parse(localStorage.getItem(favWeatherDataName)) || [];
        const ids = oldData.map(item => item.id ?? -1)
        let id = 0;
        while(ids.includes(id)) {
            id++;
        }
        const newData = [...oldData, {...object, id}]
        localStorage.setItem(favWeatherDataName, JSON.stringify(newData));
        console.log(newData);
        favData(newData)
    }

    return (
        <Card style={{ width: '18rem', padding: 0, margin: '5px' }}>
            <Card.Header>{object.name}, {object.country}</Card.Header>
            <Card.Body>
                <Card.Title><h1>{weatherCodes[object.weatherCode].emoji}{object.temp}°C</h1></Card.Title>
                <Card.Text>
                    min temperature: {object.minTemp}°C<br/>
                    max temperature: {object.maxTemp}°C<br/>
                    wind speed: {object.windSpeed}m/s<br/>
                    wind direction: {object.windDir}°<br/>
                    time: {object.time}<br/><br/>
                    min temperature tomorrow: {object.tomorrowMinTemp}°C<br/>
                    max temperature tomorrow: {object.tomorrowMaxTemp}°C<br/>
                </Card.Text>
                {
                    !isOpened ?
                        <Col>
                            <Row style={{padding: 5}}>
                                <Button variant={"primary"} onClick={save} >favourite</Button>
                            </Row>
                        </Col>
                        :
                        null
                }
            </Card.Body>
        </Card>
    )
}

export default WeatherCard;