export const weatherCodes = {
    0: { color: "#ffddab", emoji: "☀️" },
    1: { color: "#cae1c7", emoji: "🌤️" },
    2: { color: "#bbddd5", emoji: "⛅" },
    3: { color: "#b2cce3", emoji: "☁️" },
    45: { color: "#dadada", emoji: "🌫️" },
    48: { color: "#cfcfcf", emoji: "🌁" },
    51: { color: "#95abcf", emoji: "🌦️" },
    53: { color: "#8aa0b8", emoji: "🌧️" },
    55: { color: "#8ca3c1", emoji: "🌧️" },
    61: { color: "#93afca", emoji: "🌦️" },
    63: { color: "#7f8eb8", emoji: "🌧️" },
    65: { color: "#6d6d95", emoji: "⛈️" },
    71: { color: "#cfdded", emoji: "🌨️" },
    73: { color: "#f1fffc", emoji: "❄️" },
    75: { color: "#f4ffff", emoji: "❄️" },
    80: { color: "#95b5d5", emoji: "🌦️" },
    81: { color: "#9bade4", emoji: "🌧️" },
    82: { color: "#7777cd", emoji: "⛈️" },
    95: { color: "#b581b5", emoji: "🌩️" },
    96: { color: "#955b95", emoji: "⛈️" },
    99: { color: "#895da6", emoji: "🌩️" }
};

export const basicData ={
    name: "city",
    country: "country",
    temp: "0",
    maxTemp: "0",
    minTemp: "0",
    windSpeed: "0",
    windDir: "0",
    time: "0",
    weatherCode: 0,
    tomorrowMaxTemp: 0,
    tomorrowMinTemp: 0
};

export const createNewDataObject = (data) => {
    return{
        name: data.name,
        country: data.country,
        temp: data.temp,
        maxTemp: data.maxTemp,
        minTemp: data.minTemp,
        windSpeed: data.windSpeed,
        windDir: data.windDir,
        time: data.time,
        weatherCode: data.weatherCode,
        tomorrowMaxTemp: data.tomorrowMaxTemp,
        tomorrowMinTemp: data.tomorrowMinTemp
    }
}

export const currWeatherDataName = "currWeather";
export const favWeatherDataName = "favWeather";

export const getLocStCurrWN = () => localStorage.getItem(currWeatherDataName);
export const getLocStFavWN = () => localStorage.getItem(favWeatherDataName);

export const searchData = async (city) => {
    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=uk`);
        const geoData = await geoRes.json();
        if(geoData.results.length === 0 || !geoData.results){
            alert("wrong result");
            return(basicData)
        }

        const {latitude, longitude, name, country} = geoData.results[0];

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
        const weatherData = await weatherRes.json();

        const data ={
            name,
            country,
            temp: weatherData.current_weather.temperature,
            maxTemp: weatherData.daily.temperature_2m_max[0],
            minTemp: weatherData.daily.temperature_2m_min[0],
            windSpeed: weatherData.current_weather.windspeed,
            windDir: weatherData.current_weather.winddirection,
            time: weatherData.current_weather.time,
            weatherCode: weatherData.current_weather.weathercode,
            tomorrowMaxTemp: weatherData.daily.temperature_2m_max[1],
            tomorrowMinTemp: weatherData.daily.temperature_2m_min[1]
        };
        return(data);
    }
    catch(err){
        alert(err);
        return(basicData);
    }
}