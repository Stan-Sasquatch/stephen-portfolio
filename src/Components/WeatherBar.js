import React, { useState, useEffect } from 'react';
import apiKey from '../Utils/config'
const WeatherBar = (props) => {

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.town + "," + props.countryISO}&units=metric&appid=${apiKey}`

    const [weatherState, setWeatherState] = useState({ imgSrc: "", temp: "", description: "", loaded: false });

    const [errorState, setErrorState] = useState(false)
    useEffect(() => {
        setErrorState(false)
        setWeatherState({ ...weatherState, loaded: false })

        fetch(apiURL).then(res =>
        //res.json()

        {
            if (res.status >= 200 && res.status <= 299) {
                return res.json();
            } else {
                alert(res.statusText)
                setErrorState(true)
                throw Error(res.statusText);
            }
        }

        )

            .then(json =>

                setWeatherState({

                    imgSrc: json.weather[0].icon, temp: json.main.temp, description: json.weather[0].description, loaded: true

                }))


            .catch((error) => console.log(error))
    }, [apiURL])

    if (!weatherState.loaded) {

        const errorText = `Can't find that City, please try again.`
        const loadingText = `...Loading Weather information for ${props.town + ", " + props.countryISO}`

        return (<div>{errorState ? errorText : loadingText}</div>)
    }


    return (<div><h1>Today's Weather</h1>
        <h2>Weather information for {props.town + ", " + props.countryISO}</h2>

        <p>Temperature: {Number(weatherState.temp).toFixed(1)}</p>
        <p>Weather: {weatherState.description}</p>
        <img alt={weatherState.imgSrc} src={"https://api.openweathermap.org/img/w/" + weatherState.imgSrc + ".png"}></img></div>);
}

export default WeatherBar;


