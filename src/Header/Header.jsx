import "./Header.css";
import { FiSearch } from "react-icons/fi";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const Header = ({HandleChange,myCityWather}) => {
    return (
       <nav>
        <div className="logo">
            <h2><TiWeatherWindyCloudy></TiWeatherWindyCloudy>NiceDay</h2>
        </div>
        <div className="searchBox">
            <input type="text" placeholder="seatch your city" onChange={HandleChange}/>
            <div className="searchIcon" id="search" onClick={myCityWather}>
            <FiSearch></FiSearch>
            </div>
        </div>
        <div className="author">
            <img src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt="" />
        </div>
       </nav>
    );
};

export default Header;