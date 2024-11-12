import { Fragment } from "react"
import PropTypes from "prop-types";

//Versión de usar Fragment con importación
export const FirstApp = ()=>{
    return <Fragment>
        <h2>Mi primer componente de React</h2>
         <p>Soy un texto con la etiqueta p</p>
         <p>Estoy importando Fragment</p>
    </Fragment>
}

//Ahora ya no es necesario importar Fragment es suficiente con usar <> esto simboliza un fragment

const newMessage = 'Mi primer componente de React';//se recomienda que las constantes de js
//esten fuera del component function

const imprimirObjetoHtml = {
    message: 'Hola Mundo!!!',
    title:'HelloWorld',
}

const getMessage = ($mensaje) => {
    return JSON.stringify($mensaje);
}

export const FirstAppFragment = ({title = 'No existe título', subtitle}) => {

    //En vez de usar todo esto podemos usar PropTypes
    // if(!title){
    //     throw new Error('No existe el prop title')
    // }

    return <>
            <h2> {title} suma: {1+subtitle}</h2>
            <code>{getMessage(imprimirObjetoHtml)}</code>
            <p>Soy un texto con la etiqueta p</p>   
            <p>Estoy usando {'<>'}</p>
    </>
}

FirstAppFragment.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired
}

//Este modo de enviar por default los props no es recomendado porque se va eliminar
// FirstAppFragment.defaultProps = {
//     title : 'No existe título'
// }