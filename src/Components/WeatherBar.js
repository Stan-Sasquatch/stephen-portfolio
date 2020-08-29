import React, { useState, useEffect } from 'react';
import apiKey from '../Utils/config'
const WeatherBar = (props) => {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.town + "," + props.countryISO}&units=metric&appid=${apiKey}`

    const [weatherState, setWeatherState] = useState({ imgSrc: "", temp: "", description: "", loaded: false });
    useEffect(() => {
        fetch(apiURL).then(res => res.json())
            .then(json =>
                setWeatherState({

                    imgSrc: json.weather[0].icon, temp: json.main.temp, description: json.weather[0].description, loaded: true

                }))


            .catch(console.log("ERROR"))
    }, [])

    if (!weatherState.loaded) {
        return (<div>...Loading Weather information for {props.town + ", " + props.countryISO}</div>)
    }

    return (<div><h1>Today's Weather</h1>
        <h2>Weather information for {props.town + ", " + props.countryISO}</h2>

        <p>Temperature: {Number(weatherState.temp).toFixed(1)}</p>
        <p>Weather: {weatherState.description}</p>
        <img alt="weather in your area" src={"https://api.openweathermap.org/img/w/" + weatherState.imgSrc + ".png"}></img></div>);
}

export default WeatherBar;


