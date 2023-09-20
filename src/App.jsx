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


  // in this function x is the svg(search icon) which is automaticly coming from the search button
  const myCityWather = (x,city) => {
    // showing the city info that has been given by button clicked
   if(!city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
        .then(res => res.json())
        .then(data => setWeatherData(data))
   }
    // showing the city info that has been given by key-board enter clicked
  
   else{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
        .then(res => res.json())
        .then(data => setWeatherData(data))
   }
      


  }

  const HandleChange = (event) => {
    let myCity = event.target.value
    setCityName(myCity)
    console.log(event)
    if(event.keyCode == 13){
      myCityWather(1,cityName)
    }
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
