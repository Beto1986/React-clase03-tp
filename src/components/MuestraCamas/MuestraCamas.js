import propTypes from "prop-types";

// 5 e -	Modificá el componente MuestraCamas de forma tal que, si la cantidad que recibe es 0 me aparezca la leyenda “No tiene camas disponibles” y si tiene un número positivo que figure “Un total de X camas”.
// 5 f -	Al punto anterior agregale que, si tiene más de 5 camas disponibles muestre el texto en verde, si tiene entre 1 y 4 camas disponibles en amarillo y si tiene 0 camas, en rojo.

const MuestraCamas = ({camas}) =>  {

let mensaje = "";

// Para este caso voy a aplicar estilos en linea asi resuelvo los puntos 5 e y 5 f, podría haber aplicado una clase y definir estilos al componente, pero bueno, lo hice así.
if (camas > 5 ) {
    mensaje = <p style = {{color:"green"}}>Un total de {camas} camas</p>; 
} else if (camas === 0) {
    mensaje =<p style = {{color:"red"}}>No tiene camas disponibles</p>; 
} else {
    mensaje = <p style = {{color:"yellow"}}>Un total de {camas} camas</p>; 
}

// Aplicaba al 5 e.
// (camas === 0) ? mensaje = "No tiene camas disponibles" : mensaje = `Un total de ${camas} camas`;

// Esta es otra forma sin desestructurar la prop
//  const MuestraCamas = (props) =>  {
// let mensaje = "";
// console.log(props.camas);
// (props.camas === 0) ? mensaje = "No tiene camas disponibles" : mensaje = `Un total de ${props.camas} camas`;

return (<p>{mensaje}</p>); 
}

//5 d - Agregale las proptypes (si lo requieren)
// Agrego la propTypes para camas.
MuestraCamas.propTypes = {
    camas: propTypes.number }

export default MuestraCamas;

