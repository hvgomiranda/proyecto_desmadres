import "./Menu.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Menu(props)
{
    function changeMenuText()
    {
        
        let menuBtn = document.querySelector(".menu-btn");
        let menuPage = document.querySelector(".menu-page");
        let menuPageTexts = document.querySelectorAll(".menu-page li a");
        let menuPageTextsArray = Array.from(menuPageTexts);
        let menuText = document.querySelector(".menu-text");
        
        if(menuText.innerHTML === "Menú")
        {
            menuText.innerHTML = "Cerrar";
            menuPage.style.display = "flex";
            menuBtn.style.color = "#e1e2d5";
            props.updateStyle({backgroundColor: "#dc500e", fill: "white"});
            menuPageTextsArray.map((element, index) => {
                setTimeout(() => {
                    element.classList.add("slide-top-item");
                }, index * 200);
            });
        }
        else
        {
            menuText.innerHTML = "Menú";
            menuPage.style.display = "none";
            menuBtn.style.color = "black";
            props.updateStyle({backgroundColor: "#e1e2d5"});
            menuPageTextsArray.map((element, index) => {
                setTimeout(() => {
                    element.classList.add("slide-top-item");
                }, index * 200);
            });
        }
    }


    return(
        <div className="menu">
            <button className="menu-btn">
                <h1 onClick={changeMenuText} className="menu-text">Menú</h1>
            </button>
           <nav>
                <ul className="menu-page">
                    <li className="slide-top-item"><Link to="/">Desmadres</Link></li>
                    <li className="slide-top-item"><Link to="/que-es">¿Qué es?</Link></li>
                    <li className="slide-top-item"><Link to="/actividades">Actividades</Link></li>
                    <li className="slide-top-item"><Link to="/participantes">Participantes</Link></li>
                    <li className="slide-top-item"><Link to="/staff">Staff</Link></li>
                    <li className="slide-top-item"><Link to="/congreso">Congreso</Link></li>
                    <li className="slide-top-item"><Link to="/no-ficcion">Premios no ficción</Link></li>
                    <li className="slide-top-item"><Link to="/contacto">Contacto</Link></li>
                </ul> 
           </nav>
        </div>
    )
}

export default Menu;