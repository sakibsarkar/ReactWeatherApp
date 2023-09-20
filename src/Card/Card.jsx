import "./Card.css";
import { BsArrowDown, BsArrowUp, BsDropletHalf, BsSpeedometer2, BsThermometerHalf } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
import { TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import { tempInCelCius } from "./../converter/convert";

const Card = ({ weatherData }) => {

    const { main, wind, coord, name, sys } = weatherData

    // C = K – 273.15
    // const tempInCelCius = Math.ceil((main?.temp - 273.15).toFixed(2))

    return (
        <div className="container">
            <div className="top">
                <div className="left"><p className="icon-center"><BsSpeedometer2></BsSpeedometer2>{main? main.pressure : 0}hPa</p></div>
                <div className="mid"><p className="icon-center"><FiWind></FiWind>{wind?wind.speed:0} km/h</p></div>
                <div className="right"><p className="icon-center"><BsDropletHalf></BsDropletHalf>{main? main.humidity : 0}%</p></div>
            </div>

            <div className="temp">
                <div className="flex-container">
                    <BsThermometerHalf className="thermoMeter"></BsThermometerHalf>
                    <p className="celcius">{tempInCelCius(main? main.temp : 273)}<sup>&#176;C</sup></p>
                </div>
                <div className="hero-box">
                    <div>
                        <p className="ctnry">Country - {sys?.country}</p>
                        <p className="city">{name}</p>
                    </div>
                    <div className="min-max">
                        <p><BsArrowUp></BsArrowUp> Max temp - {tempInCelCius(main?main.temp_max: 273)}<sup>c</sup></p>
                        <p><BsArrowDown></BsArrowDown> Min temp - {tempInCelCius(main? main.temp_min : 273)}<sup>c</sup></p>
                    </div>

                </div>
            </div>

            <div className="bottom">
                <div>
                {/* longitude and latitude */}
                    <p className="icon-center"><TbWorldLongitude></TbWorldLongitude>Longitude - {coord?.lon}</p>
                    <p className="icon-center"><TbWorldLatitude></TbWorldLatitude> Latitude - {coord?.lat}</p>

                </div>
            </div>
           <div className="wave">
          <img src="https://i.ibb.co/Yb5nyg3/wave.png" alt="" />
           </div>
        </div>
    );
};

export default Card;