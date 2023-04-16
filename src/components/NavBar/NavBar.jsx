import "./NavBar.css";
import Menu from "../Menu/Menu.jsx";
import { useState } from "react";
import SvgComponent from "../Logo/Logo";


function NavBar()
{

    const [style, setStyle] = useState({backgroundColor: "#e1e2d5"});

    function updateStyle(newStyle){
        setStyle(newStyle);
    }

    return(
        <div className="navBar noSelect" style={style}> 
            <SvgComponent width={300}  height={100} />
            <Menu updateStyle={updateStyle} />
        </div>
    )
}

export default NavBar;