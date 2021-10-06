// // 3)	Completá el objeto correspondiente a las prop types de componente Habitacion:

// import ReactDOM  from "react-dom";
// import propTypes from "prop-types";

// const reservas = {
//     id: 1,
//     name: "Fabricio"
// }

// const Habitacion = (props) => {
//     const {camas, tieneTV, tipoPlacard, reservadoPor} = props;
// return (

// // Acá iría la vista principal. No importa de momento.
// null
// ); 
// };

// Habitacion.propTypes = {
//     // Completa las props con sus respectivos tipos.
//     // Considera que reservadorPor debe ser obligatorio.
//     camas: propTypes.number,
//     tieneTV: propTypes.bool,
//     tipoPlacard: propTypes.string,
//     reservadoPor: propTypes.object.isRequired
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//     <Habitacion 
//     camas = {5}
//     tieneTV = {false}
//     tipoPlacard = "Empotrado"
//     reservadoPor = {reservas} />,
//     rootElement
// );


 // Incorporo la importación nueva
import MuestraCamas from "../MuestraCamas/MuestraCamas"

 const listado = (
    <ul>
        <li>Sauna</li>
        <li>Hidromasaje</li>
    </ul>
);

const Habitacion = () => {
    let camas = 6; // este valor lo voy seteando con distintos numeros de camas para ir probando
    return (
        <>
        <p>La habitación que ha reservado tiene: </p>
        {/* Tengo que agregar la prop para poder pasarla al componente "MuestraCamas" */}
        <MuestraCamas camas = {camas}/>  
        <p>La habitación que ha reservado NO tiene:</p>
        {listado}
        </>
    );
    };

    export default Habitacion;
