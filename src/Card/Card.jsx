import "./Card.css";
import { AiOutlineCloud } from "react-icons/ai";
import { BsDropletHalf } from "react-icons/bs";
import { FiWind } from "react-icons/fi";

const Card = () => {
    return (
        <div className="container">
            <div className="top">
                <div className="left"><p><AiOutlineCloud></AiOutlineCloud>75%</p></div>
                <div className="mid"><p><FiWind></FiWind>31.ms</p></div>
                <div className="right"><p><BsDropletHalf></BsDropletHalf>86%</p></div>
            </div>

            <div className="temp">
                <p className="celcius">4<sup>&#176;C</sup></p>
                <p className="ctnry">Country - BD</p>
                <p className="city">Dhaka</p>
            </div>
        </div>
    );
};

export default Card;