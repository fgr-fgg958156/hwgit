import Input from "../components/Input";
import {useState} from "react";
import {currWeatherDataName, searchData} from "../components/config/ConfigValue";
import {Button} from "react-bootstrap";

function SearchBar({weatherState, setIsOpened}) {
    const [city, setCity] = useState("");
    const [, setWeather] = useState(null);

    const search = async ()=>{
        setWeather(null);
        const newData = await searchData(city)
        setWeather(newData);
        localStorage.setItem(currWeatherDataName, JSON.stringify({...newData, isOpened: false}));
        weatherState(newData);
        setIsOpened(false);
    }

    return (
        <div style={{margin: '5px' }}>
            <Input onChange={(e) => {setCity(e.target.value)}}></Input>
            <Button variant={"primary"} onClick={search} >search</Button>
        </div>
    )
}

export default SearchBar;