import {Card, ListGroup} from "react-bootstrap";
import ListFavoriteItem from "../components/ListFavoriteItem";
import {getLocStFavWN, weatherCodes} from "../components/config/ConfigValue";
import {useEffect, useState} from "react";

function FavoritesList({setFavData, favData, setCurrData, setIsOpened}) {
    const [data, setData] = useState(getLocStFavWN() ? JSON.parse(getLocStFavWN()) : []);

    useEffect(() => {
        setData(favData);
    }, [favData]);

    return (
        <Card style={{ width: '18rem', padding: 0, margin: '5px' }}>
            <Card.Header>Favourite</Card.Header>
            <ListGroup variant="flush" style={{overflowY: 'scroll', height: '18rem'}}>
                {
                    data.map((item) => (
                        <ListFavoriteItem setFavData={setFavData} key={item.id} setIsOpened={setIsOpened} setWeatherData={setCurrData} index={item.id} location={`${item.name}, ${item.country}`} weather={`${weatherCodes[item.weatherCode].emoji}${item.temp}°C`}></ListFavoriteItem>
                    ))
                }
            </ListGroup>
        </Card>
    )
}

export default FavoritesList;