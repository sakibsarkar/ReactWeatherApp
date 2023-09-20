import "./Header.css";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TiWeatherWindyCloudy } from "react-icons/ti";

const Header = ({ HandleChange, myCityWather }) => {
    const [url, setUrl] = useState("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
    function hover() {
        setUrl("https://i.ibb.co/NmDPbLf/c-Ie5-Mv-Dv-X4-Vc.gif")
    }
    function mouseOut() {
        setUrl("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
    }

    const [time, setTime] = useState("")

    setInterval(() => {
        let hour = new Date().getHours()
       hour =  hour < 10 ? "0" + hour : hour
        let minute = new Date().getMinutes()
        minute =  minute < 10 ? "0" + minute : minute
        let second = new Date().getSeconds()
        second =  second < 10 ? "0" + second : second
        let currentTime = `${hour} : ${minute} : ${second}`
        // console.log(currentTime)
        setTime(currentTime)
    }, 1000)


    return (
        <nav>
            <div className="logo">
                <h2 title="logo"><TiWeatherWindyCloudy></TiWeatherWindyCloudy>NiceDay</h2>
            </div>
            <div className="searchBox">
                <input type="text" id="search" placeholder="seatch your city" onKeyUp={HandleChange} />

                <div className="searchIcon" onClick={myCityWather}>
                    <FiSearch></FiSearch>
                </div>
            </div>

            <div className="corner">
                <div className="time">
                    <p>{time}</p>
                </div>
                <div className="author">
                    <a href=""><img src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt="" /></a>
                    <a href="" className="gitHub" onMouseEnter={hover} onMouseLeave={mouseOut}><img src={url} alt="" /></a>
                </div>
            </div>
        </nav>
    );
};

export default Header;