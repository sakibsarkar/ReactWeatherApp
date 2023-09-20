import "./Header.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const Header = ({HandleChange,myCityWather}) => {
    const[url,setUrl] = useState("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
    function hover(){
        setUrl("https://i.ibb.co/NmDPbLf/c-Ie5-Mv-Dv-X4-Vc.gif")
    }
    function mouseOut(){
        setUrl("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
    }
    
    return (
       <nav>
        <div className="logo">
            <h2><TiWeatherWindyCloudy></TiWeatherWindyCloudy>NiceDay</h2>
        </div>
        <div className="searchBox">
            <input type="text" id="search" placeholder="seatch your city" onKeyUp={HandleChange}/>
            
            <div className="searchIcon"  onClick={myCityWather}>
            <FiSearch></FiSearch>
            </div>
        </div>
        <div className="author">
            <a href=""><img src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt="" /></a>
            <a href="" className="gitHub"><img src={url} onMouseEnter={hover} onMouseLeave={mouseOut} alt=""/></a>
        </div>
       </nav>
    );
};

export default Header;