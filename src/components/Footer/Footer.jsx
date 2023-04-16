import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

function Footer(){
    return(
        <div className="Footer">
            <IconContext.Provider value={{ className: "iconos", size: 35}}>
            <>
                <Link to={"https://www.instagram.com/desmadres.festival/"} target="_blank">
                    <FaInstagram/> 
                </Link>
                <Link to="#" target="_blank" onClick={(e) =>{
                    window.location.href = "mailto:info@desmadres.org";
                    e.preventDefault();
                }}>
                    <FiMail/>    
                </Link>
            </>
        </IconContext.Provider>
            <div>
            </div>
        </div>
    )
}

export default Footer;