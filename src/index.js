import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';


// // 3)	Completá el objeto correspondiente a las prop types de componente Habitacion:

// // import ReactDOM  from "react-dom";
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

// ReactDOM.render(
//     <App />, 
//   document.getElementById('root')
// );





// 4 -	Partiendo del siguiente código, ¿qué debo modificar para que no rompa el mismo?
// Para que no rompa, se agrego la prop "camas" para que pueda utilizarse luego dentro del componente.

//5 -	Una vez arreglado el problema anterior, generá una carpeta (dentro de src) que se llame components. Adentro de ella:
// a -	Generá una carpeta por cada componente que tenés en index.js (Por ej, MuestraCamas debería tener una carpeta con este mismo nombre dentro de src)
// b - 	Generá un componente con cada uno de las funciones que tenes en index.js dentro de la carpeta con su nombre (Dentro de src/MuestraCamas deberías tener un MuestraCamas.js con toda la función tal cual la tenés en index.js)
// c - 	Verifica que todo esté funcionando correctamente. 


 // Tengo que importar el componente Habitacion -> "MuestraCamas"
 import  Habitacion from "./components/Habitacion/Habitacion";
//  import propTypes from "prop-types"; // Me lo llevo al componente "MuestraCamas"
import Avatar from "./components/Avatar/Avatar"; // Importo el componente Avatar


const reservas = {
    id: 1,
    name: "Fabricio"
}

// const MuestraCamas = ({camas}) => <p> Un total de {camas} camas</p>;

// Me lo llevo solo porque lo necesito en el componente "Habitación"
// const listado = (
//     <ul>
//         <li>Sauna</li>
//         <li>Hidromasaje</li>
//     </ul>
// );

// const Habitacion = () => {
// let camas = 5;
// return (
//     <>
//     <p>La habitación que ha reservado tiene: </p>
//     {/* Tengo que agregar la prop para poder pasarla al componente "MuestraCamas" */}
//     <MuestraCamas camas = {camas}/>  
//     <p>La habitación que ha reservado NO tiene:</p>
//     {listado}
//     </>
// );
// };

// Declaro acá el tipo de dato, estos son los valores que voy a ir seteando con distintos valores para ir probando

let dire = "https://randomuser.me/api/portraits/women/9.jpg";
let cont = null;
let est = "disponible"

// Otras direcciones para probar
// https://randomuser.me/api/portraits/women/9.jpg
// https://randomuser.me/api/portraits/women/60.jpg

ReactDOM.render(
     <>
    <Habitacion />,
     {/* Direccion -> Dirección de la img , Contorno = cuadrado o circular y estado = disponible o ocupado */}
    <Avatar direccion = {dire}  contorno = {cont}  estado = {est} />
     </>,
    document.getElementById("root")
);

// // g)	Explicá con tus palabras, la diferencia entre
// import “./miEstilo.css”
// e
// import estilos from “miEstilo.module.css”

// La diferencia es que en el primero, esos estilos pueden ser aplicados a multiples partes de nuestra página(componentes, elementos,etc) y el estilo con el modulo.css se utiliza para "encapsular" ese estilo solo a un componente en particular. Esto hace que no se generen conflictos entre estilos de cada componente y además en un proyecto grande podríamos romper otros componentes que no tuvimos en cuenta al no medir el impacto que podría ocasionar nuestro cambio o modificación. Todo dependerá según la necesidad que vayamos a utilizar.