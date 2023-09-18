import "./Header.css";

const Header = () => {
    return (
       <nav>
        <div className="logo">
            <h2>NiceDay</h2>
        </div>
        <div className="searchBox">
            <input type="text"/>
        </div>
        <div className="author">
            <img src="https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt="" />
        </div>
       </nav>
    );
};

export default Header;