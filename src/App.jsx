import "./App.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [cityName, setCityName] = useState("")
  const [boolen, setBoolen] = useState(false)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
      .then(res => res.json())
      .then(data => setWeatherData(data))



  }, [])


  const myCityWather = () => {
    // showing the city info that has been given by button clicked
   
    // showing the city info that has been given by key-board enter clicked
  

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
        .then(res => res.json())
        .then(data => setWeatherData(data))


  }

  const HandleChange = (event) => {
    let myCity = event.target.value
    setCityName(myCity)

  }



  return (
    <>
      <Header myCityWather={myCityWather} HandleChange={HandleChange}></Header>

      <div className="parent">
        <Card weatherData={weatherData && weatherData}></Card>
      </div>

    </>
  )
}

export default App
