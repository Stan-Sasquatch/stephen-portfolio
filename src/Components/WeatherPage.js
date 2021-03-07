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

            Country: "BR"
        },

        {
            city: "Cologne",

            Country: "DE"
        },

        {
            city: "Safi",

            Country: "MA"
        },

        {
            city: "Utrecht",

            Country: "NL"
        },

        {
            city: "Yaoundé",

            Country: "CM"
        },

        {
            city: "Huaying",

            Country: "CN"
        },

        {
            city: "Jastrzębie Zdrój",

            Country: "PL"
        },

        {
            city: "Norwich"
            ,

            Country: "UK"
        },

        {
            city: "Houma",

            Country: "CN"
        },

        {
            city: "Keelung, Taiwan",

            Country: "CN"
        },

        {
            city: "Qitaihe",

            Country: "CN"
        },

        {
            city: "Bhilwara",

            Country: "IN"
        },

        {
            city: "Mulhouse",

            Country: "FR"
        },

        {
            city: "Jiaozhou City",

            Country: "CN"
        },

        {
            city: "Bayamo",

            Country: "CU"
        },

        {
            city: "Naperville",

            Country: "US"
        },

        {
            city: "Glendale, California",

            Country: "US"
        },

        {
            city: "Masaya",

            Country: "NI"
        },

        {
            city: "Korhogo",

            Country: "CI"
        }

    ]

    const startingNum = Math.floor((Math.random() * 20))


    const [townState, setTownState] = useState({ town: randomCities[startingNum].city, ISO: randomCities[startingNum].Country });
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