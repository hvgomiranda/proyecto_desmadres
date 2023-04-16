import React from "react";
import NuestraExcusa from "./HomeComponents/NuestraExcusa/NuestraExcusa";
import SomosYHacemos from "./HomeComponents/SomosYHacemos/SomosYHacemos";
import EnUnLugar from "./HomeComponents/EnUnLugar/EnUnLugar";
import SeCruzan from "./HomeComponents/SeCruzan/SeCruzan";


const Home = () =>{

    const stylesNuestraExcusa = {
        color: "red"
    }

    return(
    <div className="Home">
        <NuestraExcusa />
        <SomosYHacemos />
        <EnUnLugar />
        <SeCruzan />
    </div>);
}

export default Home;