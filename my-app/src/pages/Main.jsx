import {Col, Container, Row} from "react-bootstrap";
import SearchBar from "../view/SearchBar";
import WeatherCard from "../view/WeatherCard";
import FavoritesList from "../view/FavoritesList";
import {basicData, getLocStCurrWN, getLocStFavWN} from "../components/config/ConfigValue";
import {useState} from "react";
import WeatherBackground from "../components/WeatherBackground";

function Main(){
    const [weatherData, setWeatherData] = useState(getLocStCurrWN() ? JSON.parse(getLocStCurrWN()) : basicData);
    const [favWeatherData, setFavWeatherData] = useState(getLocStFavWN() ? JSON.parse(getLocStFavWN()) : []);
    const [isOpened, setIsOpened] = useState(getLocStCurrWN()?JSON.parse(getLocStCurrWN()).isOpened:false);
    return (
        <Container>
            <WeatherBackground currData={weatherData}></WeatherBackground>
            <Row>
                <Col>
                    <SearchBar setIsOpened={setIsOpened} weatherState={setWeatherData}></SearchBar>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <WeatherCard isOpened={isOpened} currData={weatherData} favData={setFavWeatherData}></WeatherCard>
                        </Col>
                        <Col>
                            <FavoritesList setFavData={setFavWeatherData} setIsOpened={setIsOpened} favData={favWeatherData} setCurrData={setWeatherData}></FavoritesList>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;