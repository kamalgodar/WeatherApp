import React, {useEffect, useState} from 'react'
import './Weather.css';


const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "c11ab223bb4e952021543ca59b912943";
// const API_KEY = "35a2242c1a0a47b35674e09e89078fa8";
const UNIT = "metric";

const Weather = () => {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("Kathmandu");

    // useEffect(() => {
    const weatherApi = async () => {
        const response = await fetch(`${API_URL}?q=${search}&appid=${API_KEY}&units=${UNIT}`);
        const data = await response.json();
        setCity(data.main);
    };
        // weatherApi();
    // }, [search])

    useEffect(() => {
        weatherApi();
    }, [search])
    
    return (
        <div class="container d-flex justify-content-center mt-3">
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                <input value={search} type='text' className='form-control' placeholder='Enter city name' onChange={(event) => { setSearch(event.target.value)} } /> 
                </div>
                <div className='col'>
                    <button className='btn btn-primary' onClick={weatherApi}>Search</button>
                </div>
            </div>


            {!city ? (
                <p> No Data Found </p>
                ) : (
                <div className="container1 background">
                <div className='container mt-3'>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <i class="far fa-calendar-alt fa-2x"></i>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='h6'>Date: </span>{new Date().toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col d-flex justify-content-center">
                            <i className="fas fa-map-marker-alt fa-2x"> </i>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='h6'>Place:</span> {search}</p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col d-flex justify-content-center">
                        <i class="fas fa-temperature-hot fa-2x"></i> 
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='h6'>Temperature:</span> {city.temp}°C</p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col d-flex justify-content-center">
                        <i class="fas fa-humidity fa-2x"></i>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='h6'>Humidity:</span> {city.humidity}%</p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col d-flex justify-content-center">
                        <i className="fas fa-temperature-high fa-2x"></i>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class='h6'>Pressure:</span> {city.pressure*0.02953}Hg</p>
                        </div>
                    </div>
                </div>
                </div>
                )
            }
        </div>
    );
};

export default Weather;

