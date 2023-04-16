import "./NuestraExcusa.css";
import imagen from "../../../../media/desmadres-copa.png";

const NuestraExcusa = () =>{
    return(
        <div className="component-NuestraExcusa">
            <h1 className="title-NuestraExcusa">NUESTRA EXCUSA</h1>
            <p className="body-NuestraExcusa">Te invitamos a participar de un encuentro creado para propiciar cruces, puntos de unión y posibilidades de discusión. Una excusa compleja y elaborada para hablar, hacer, compartir, incentivar y preguntarnos qué es la literatura latinoamericana contemporánea.</p>
            <img className="image-NuestraExcusa" src={imagen} alt="img desmadres" />
        </div>
    )
}

export default NuestraExcusa;