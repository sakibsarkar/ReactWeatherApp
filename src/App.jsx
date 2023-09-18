import "./App.css";
import Card from "./Card/Card";
import Header from "./Header/Header";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}")
  },[])

  return (
    <>
    <Header></Header>
     <Card></Card>
    </>
  )
}

export default App
