import { useEffect, useState } from "react";
import "./SomosYHacemos.css";

const SomosYHacemos = () =>{
    
    const arrayActividades = ["Congreso Desmadres de literatura latinoamericana del siglo XXI", "Revista Desmadres", "Campaña de promoción de la lectura", "Charlas", "Conferencias", "Talleres", "Mesas de debate", "Entrevistas públicas", "Presentaciones de libros", "Ciclo de lecturas", "Intervenciones urbanas", "Premio de no ficción", "Premio de lectura", "Premio de escritura en portuñol", "Muestra de arte", "Podcast", "City tour", "Sala de escape."];

    const [actividades, setActividades] = useState([]);

    useEffect(() =>{
        setActividades(arrayActividades);
    }, [])

    return(
        <div className="component-Somos">
            <h1 className="title-Somos">SOMOS Y HACEMOS</h1>
            <p className="body-Somos">
                {actividades.map((actividad, i) => (
                <span key={i} className={i % 2 === 0 ? "firstColor" : "secondColor"}>
                    {actividad}{' '}
                </span>))}
            </p>
        </div>
    )
}

export default SomosYHacemos;