import React from "react";

const WeatherForecast = (props) => {
    return(
    <div className="weather">
      <img src={props.img} alt=""/>
      <p><span>condition:</span>{props.condition}</p>
      <p><span>time:</span> {props.time}</p>
    </div>
    )
}

export default WeatherForecast;
