import "./App.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [cityName, setCityName] = useState("")

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
      .then(res => res.json())
      .then(data => setWeatherData(data))



  }, [])
  // rgba(0, 185, 186, 1) 35%, rgba(0, 65, 255, 1)

  // in this function x is the svg(search icon) which is automaticly coming from the search button
  const myCityWather = (x, city) => {
    // showing the city info that has been given by button clicked a--- 
    if (!city) {

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
        .then(res => res.json())
        .then(data => {
          if (data.cod == 404) {
            toast.error('No city data available on this name !', {
              style: {
                // border: '1px solid rgba(0, 65, 255, 1)',
                padding: '16px',
                color: 'black',
                backdropFilter: "blur(5px)",
                borderRadius: " 10px",
                fontFamily: 'Inter',
                color: "#fff",
                background: "linear-gradient(rgba(255, 255, 255, 0.141), rgba(137, 137, 137, 0.313))"

              },
              iconTheme: {
                primary: '#db6f6f',
                secondary: '#FFFAEE',
              },
              duration: 2000,
            });
          }

          else {
            setWeatherData(data)
          }
        }





        )
    }
    // showing the city info that has been given by key-board enter clicked

    else {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4af0a8ed4d6e6271c0d441d472d939c4`)
        .then(res => res.json())
        .then(data => {
          if (data.cod == 404) {
            toast.error('No city data available on this name !', {
              style: {
                // border: '1px solid rgba(0, 65, 255, 1)',
                padding: '16px',
                color: 'black',
                backdropFilter: "blur(5px)",
                borderRadius: " 10px",
                fontFamily: 'Inter',
                color: "#fff",
                background: "linear-gradient(rgba(255, 255, 255, 0.141), rgba(137, 137, 137, 0.313))"

              },
              iconTheme: {
                primary: '#db6f6f',
                secondary: '#FFFAEE',
              },

              duration: 2000,

            });
          }

          else {
            setWeatherData(data)
          }
        })
    }



  }

  const HandleChange = (event) => {
    let myCity = event.target.value
    setCityName(myCity)
    if (event.keyCode == 13) {
      myCityWather(1, cityName)
    }
  }





  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <Header myCityWather={myCityWather} HandleChange={HandleChange}></Header>

      <div className="parent">
        <div className="searchBox " id="mobileSearch">
          <input type="text" id="search" placeholder="seatch your city" onKeyUp={HandleChange} />

          <div className="searchIcon" onClick={myCityWather}>
            <FiSearch></FiSearch>
          </div>
        </div>
        <Card weatherData={weatherData && weatherData}></Card>
      </div>

    </>
  )
}

export default App
