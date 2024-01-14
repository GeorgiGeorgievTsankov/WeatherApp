import React, { useState } from 'react'
import './WeatherApp.css'
import clear_icon from '../Assets/Assets/clear.png'
import cloud_icon from '../Assets/Assets/cloud.png'
import drizzle_icon from '../Assets/Assets/drizzle.png'
import humidity_icon from '../Assets/Assets/humidity.png'
import rain_icon from '../Assets/Assets/rain.png'
import search_icon from '../Assets/Assets/search.png'
import snow_icon from '../Assets/Assets//snow.png'
import wind_icon from '../Assets/Assets/wind.png'



export const WeatherApp = () => {

    let api_key = "18e1626e63bd05c9c3ba5e6da0f23184";
    const [wicon, setWicon] = useState(cloud_icon);


    const search = async () => {
        const cityInp = document.querySelector('.cityInput');
        if (cityInp.value.length <= 0) {
            return;
        } else {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInp.value}&units=Metric&appid=${api_key}`;

            const response = await fetch(url);
            const data = await response.json();

            const humidity = document.querySelector('.humidity');
            const weatherSpeed = document.querySelector('.speed');
            const location = document.querySelector('.weatherLocation');
            const weatherTemp = document.querySelector('.weatherTemp');

            humidity.textContent = Math.floor(data.main.humidity) + "%";
            weatherSpeed.textContent =Math.floor (data.wind.speed) + "km/h";
            location.textContent = data.name;
            weatherTemp.textContent = Math.floor(data.main.temp) + "°c";
            cityInp.value = "";

            switch (data.weather[0].icon) {
                case "01d":
                case "01n":
                    setWicon(clear_icon)
                    break;
                case "02d":
                case "02n":
                    setWicon(cloud_icon)
                    break;
                case "03d":
                case "03n":
                    setWicon(drizzle_icon)
                    break;
                case "04d":
                case "04n":
                    setWicon(drizzle_icon)
                    break;
                case "09d":
                case "09n":
                    setWicon(rain_icon)
                    break;
                case "10d":
                case "10n":
                    setWicon(rain_icon)
                    break;
                case "13d":
                case "13n":
                    setWicon(snow_icon)
                    break;

                default: setWicon(clear_icon)
                    break;
            }
        }



    }


    return (
        <div className="container">
            <div className="topBar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="searchIcon" onClick={() => { search() }}>
                    <img src={search_icon} alt="searchIcon" />
                </div>
            </div>
            <div className="weatherIcons">
                <img src={wicon} alt="weatherIcons" />
            </div>
            <div className="weatherTemp">24°</div>
            <div className="weatherLocation">London</div>
            <div className="dataContainer">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity">50%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="speed">60 km/h</div>
                        <div className="weatherSpeed">Weather speed</div>
                    </div>
                </div>
            </div>
        </div>

    )
}
