import React from "react";
import "./styles.css";
import weatherData from "./WeatherData";
import WeatherForecast from "./components/WeatherForecast";

const App = () => {
  console.log(weatherData)
  const allWeatherData = weatherData.map((ele, index) =>{
    return <WeatherForecast {...ele} key={index}/>
  })
  return (
    <div className="App">
      <section>
      <h1>My WeatherIcons</h1> 
      { allWeatherData }
      </section>
    </div>
    
  );
}

export default App;