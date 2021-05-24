import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Weather = (val) => {
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    console.log(val);
    var deg = parseInt((val.val.val.main.temp) - 273.15)
    return (
        <div>
            <div className="main">
                <div className="text-center">
                    
                    <div >
                        <h6>Today</h6>
                        {new Date().getHours() + ":" + new Date().getMinutes()}<br />
                        {week[new Date().getDay()] + ", " + new Date().getDate() + " " + month[new Date().getMonth()]}
                    </div>
                </div>

                <div className="text-center">
                    <h2>{deg > 0 && <span>+</span>}{deg}°C</h2>
                    <h6>{val.val.val.name}, {val.val.val.sys.country}</h6>
                </div>
                <div style={{lineHeight: '30px'}}>
                    <span>Humidity</span>
                    <ProgressBar variant="warning" style={{height:'5px'}} now={val.val.val.main.humidity} />

                    <span>Pressure</span>
                    <ProgressBar variant="warning" style={{height:'5px'}} now={val.val.val.main.pressure} />

                    <span style={{paddingRight: '35px'}}>Wind: </span>
                    <span>{val.val.val.wind.speed} m/s</span>

                </div>
            </div>
        </div>
    );
}

export default Weather;