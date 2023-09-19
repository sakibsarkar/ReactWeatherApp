import "./App.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import { useEffect, useState } from "react";

function App() {
  const [weatherData,setWeatherData] = useState({})
  
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
      .then(res => res.json())
      .then(data => setWeatherData(data))
 
  

  }, [])

  const myCityWather = (city)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
      .then(res => res.json())
      .then(data => setWeatherData(data))
  }


  return (
    <>
      <Header></Header>
      <div className="parent">
      <Card weatherData={weatherData && weatherData}></Card>
    </div>
    </>
  )
}

export default App
