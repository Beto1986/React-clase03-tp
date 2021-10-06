// 6 -	Generá un componente nuevo que muestre un avatar.
// Pasale tres props:
// ●	La primera debe contener la dirección a la imágen.
// ●	La segunda será el tipo de contorno: Si le pasamos “cuadrado” se mostrará un avatar cuadrado, mientras que si le pasamos “circular” se mostrará la foto cuadrada con un border-radius del 50%.
// ●	El tercer parámetro será el estado: Si es “disponible” se mostrará un borde verde mientras que si es “ocupado” el borde será rojo.

// Pueden usar estas fotos para pasarles como primer argumento.
// https://randomuser.me/api/portraits/women/9.jpg
// https://randomuser.me/api/portraits/women/60.jpg

// Validaciones:
// Si la dirección es null entonces mostrar esta foto por default:
// https://randomuser.me/api/portraits/women/99.jpg

// Si el tipo de contorno es null entonces debe quedar fijo el avatar circular.

// Si el color es null entonces debe quedar fijo el disponible. // esto no entendi.. A que se refiere el color ?

// Atención!! El componente debe contener una carpeta dentro de src con el nombre del componente, un archivo .module.css con los estilos necesarios y un archivo con el nombre del componente y la extensión js. No te olvides de agregarles las prop types.

// Te dejo el ejemplo de un avatar convencional: https://mui.com/components/avatars/#image-avatars

import React from "react";
import estiloAvatar from "../Avatar/avatar.module.css";
import propTypes from "prop-types";

const Avatar = ({direccion, contorno, estado}) => {

    // Avatar.propTypes = {
    //     direccion: propTypes.string,
    //     contorno: propTypes.object,
    //     estado: propTypes.string,
    // }

// Validaciones.
// Si la dirección es null muestro la siguiente foto por default sino la que ya viene
(direccion === null ) ? direccion = "https://randomuser.me/api/portraits/women/99.jpg" : direccion = direccion;

let definoEstilo; // Lo defino para guardar el estilo que corresponda
let definoEstiloEstado; // Lo defino para aplicar el estilo de los bordes

// Valido el contorno para aplicarle estilos al Avatar
if (contorno === null || contorno === "circular") {
definoEstilo = estiloAvatar.circular;
} else { // Si salimos por el else significa que le pasamos "cuadrado"
definoEstilo = estiloAvatar.cuadrado;
}

// Valido el estado con un ternario y aplico el borde que le corresponda
(estado === "disponible") ? definoEstiloEstado = estiloAvatar.bordeVerde : definoEstiloEstado = estiloAvatar.bordeRojo;

    return (
        <>
        <img src = {direccion} alt="dirección" className={ `${definoEstilo} ${definoEstiloEstado}` } /> 
        </>
    )
}


export default Avatar;