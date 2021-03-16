import React, { useState } from 'react';
import WeatherBar from './WeatherBar'
import WeatherSearchBar from './WeatherSearchBar'


const WeatherPage = () => {

    const randomCities = [

        {
            city: "Bettiah",

            country: "IN"
        },

        {
            city: "Uberlândia",

            country: "BR"
        },

        {
            city: "Cologne",

            country: "DE"
        },

        {
            city: "Safi",

            country: "MA"
        },

        {
            city: "Utrecht",

            country: "NL"
        },

        {
            city: "Yaoundé",

            country: "CM"
        },

        {
            city: "Huaying",

            country: "CN"
        },

        {
            city: "Jastrzębie Zdrój",

            country: "PL"
        },

        {
            city: "Norwich"
            ,

            country: "UK"
        },

        {
            city: "Houma",

            country: "CN"
        },

        {
            city: "Keelung, Taiwan",

            country: "CN"
        },

        {
            city: "Qitaihe",

            country: "CN"
        },

        {
            city: "Bhilwara",

            country: "IN"
        },

        {
            city: "Mulhouse",

            country: "FR"
        },

        {
            city: "Jiaozhou",

            country: "CN"
        },

        {
            city: "Bayamo",

            country: "CU"
        },

        {
            city: "Naperville",

            country: "US"
        },

        {
            city: "Glendale, California",

            country: "US"
        },

        {
            city: "Masaya",

            country: "NI"
        },

        {
            city: "Korhogo",

            country: "CI"
        }

    ]

    const startingNum = Math.floor((Math.random() * 20))

    const [townState, setTownState] = useState({ town: randomCities[startingNum].city, ISO: randomCities[startingNum].country });
    const [userInputs, setUserInputs] = useState({ town: "", ISO: "" })


    const handleInputSubmit = (event) => {
        event.preventDefault()
        if (userInputs.town == "") {
            alert("please submit a town name")
        }

        else if
        (userInputs.ISO == "") {
            alert("please submit a country code")

        }
        else {
            setTownState({ town: userInputs.town, ISO: userInputs.ISO })
        }

    }

    const onChange = (event) => {

        setUserInputs({
            ...userInputs,
            [event.target.name]: event.target.value
        });


    }
    return (<div className="row">


    <div className="col-6">
        <WeatherBar town={townState.town} countryISO={townState.ISO} />
        <div>Search the weather in a town or city!</div>
        <WeatherSearchBar onSubmit={handleInputSubmit} onChange={onChange} />
    </div>
    <div className="col-6">
        <WeatherBar town="Reading" countryISO="UK" />
        <div>Weather where I am!</div>
    </div>

</div>);
}
export default WeatherPage;