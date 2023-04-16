import "./EnUnLugar.css";
import { useState, useEffect } from "react";

const EnUnLugar = () => {
   
    const arrayLugares = ["Biblioteca Nacional", "Museo del Libro y de la Lengua", "Centro Cultural Recoleta", "Amigos del Museo Nacional de Bellas Artes", "Universidad de San Martín", "Universidad Nacional de las Artes", "Librería del Fondo"];
    
    const [lugares, setLugares] = useState([]);

    useEffect(() =>{
        setLugares(arrayLugares);
    }, []);

    return(
        <div className="component-EnUnLugar">
            <h1 className="title-EnUnLugar">EN UN LUGAR Y EN TODAS PARTES</h1>
            <p className="body-EnUnLugar">
                {lugares.map((lugar, i) => (
                    <span key={i} className={i%2===0 ? "firstColor" : "secondColor"}>
                        {lugar}{" "}
                    </span> 
                ))}
            </p>
        </div>
    )
}

export default EnUnLugar;