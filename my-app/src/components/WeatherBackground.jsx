import {weatherCodes} from "./config/ConfigValue";
import {useEffect} from "react";

function WeatherBackground({currData}) {
    useEffect(() => {
        const color = weatherCodes[currData.weatherCode].color || "#ffffff";
        document.body.style.backgroundImage = `linear-gradient(to bottom, ${color}, #ffffff)`;
    }, [currData]);
    return null;
}

export default WeatherBackground;