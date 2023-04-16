import "./SeCruzan.css";
import { useState, useEffect } from "react";

const SeCruzan = () =>{

    const arrayAutores = [
        "Agustina Bazterrica", "(Argentina)",
        "Paula Bombara", "(Argentina)",
        "Maruja Bustamante", "(Argentina)",
        "Gabriela Cabezón Cámara", "(Argentina)",
        "Martín Felipe Castagnet", "(Argentina)",
        "Verónica Chamorro", "(Argentina)",
        "Mauricio Kartun", "(Argentina)",
        "Matías Molle", "(Argentina)",
        "Flavia Pittella", "(Argentina)",
        "Mariano Quirós", "(Argentina)",
        "Samanta Schweblin", "(Argentina)",
        "Edgardo Scott", "(Argentina)",
        "Patricia Suárez", "(Argentina)",
        "Laura Wittner", "(Argentina)",
        "Ezequiel Zaidenwerg", "(Argentina)",
        "Giovanna Rivero", "(Bolivia)",
        "Rodrigo Urquiola Flores", "(Bolivia)",
        "Mariana Torres", "(Brasil/España)",
        "Andrea Jeftanovic", "(Chile)",
        "Orlando Echeverri Benedetti", "(Colombia)",
        "Nikolina Zidek", "(Croacia)",
        "Marcial Gala", "(Cuba)",
        "Dainerys Machado", "(Cuba)",
        "Kianny Antigua", "(Dominicana)",
        "Daniela Alcívar Bellolio", "(Ecuador)",
        "Marcela Ribadeneira", "(Ecuador)",
        "Juan Casamayor", "(España)",
        "Ave Barrera", "(México)",
        "Maritza Buendía", "(México)",
        "Verónica Gerber Bicecci", "(México)",
        "Yuri Herrera", "(México)",
        "Fabio Morábito", "(México)",
        "Brenda Navarro", "(México)",
        "Daniel Saldaña París", "(México)",
        "Ariel Ráudez", "(Nicaragua)",
        "Signe Prøis", "(Noruega)",
        "Pedro Crenes Castro", "(Panamá)",
        "Mónica Bustos", "(Paraguay)",
        "Sebastián Ocampos", "(Paraguay)",
        "José Pérez Reyes", "(Paraguay)",
        "Armando Alzamora", "(Perú)",
        "Claudia Salazar Jiménez", "(Perú)",
        "Diego Tréllez Paz", "(Perú)",
        "Claudia Ulloa", "(Perú)",
        "Tomasz Pindel", "(Polonia)",
        "Gonzalo Baz", "(Uruguay)",
        "Inés Bortagaray", "(Uruguay)",
        "Gonzalo Gálvez Romano", "(Uruguay)",
        "Damián González Bertolino", "(Uruguay)",
        "Hoski", "(Uruguay)",
        "Marialcira Matute", "(Venezuela)",
        "Michelle Roche Rodríguez", "(Venezuela)",
        "Mirko Stopar", "(Noruega)"
      ];

      const [autores, setAutores] = useState([]);

      useEffect(() => {
        setAutores(arrayAutores);
      }, []);

    return(
        <div className="component-SeCruzan">
            <h1 className="title-SeCruzan">SE CRUZAN</h1>
            <p className="body-SeCruza">
                {autores.map((autor, i) => (
                  <span key={i} className={i%2===0 ? "firstColor" : "secondColor"}>
                      {autor} {" "}
                  </span>  
                ))}
            </p>
        </div>
    )
};

export default SeCruzan;