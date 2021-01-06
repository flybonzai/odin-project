import "../style/Homepage.css";
import Navbar from "./Navbar";

const Homepage = ({currentCartTotal}) => {
    return (
        <div className="Homepage">
            <Navbar currentCartTotal={currentCartTotal}/>
        </div>
    );
};

export default Homepage;
