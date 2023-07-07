import { Children } from "react"

//V0 CHILDREN
const SuperMercado = (props) => {
    return (
        <div>
            <h1>SuperMercado {props.nome}</h1>
            {props.children}
        </div>
    )
}
    
const Legume = ({nome}) =>
    <div>
        <h3>Legume: {nome}</h3>
    </div>

const Fruta = ({nome}) =>
    <div>
        <h3>Fruta: {nome}</h3>
    </div>

const Bebida = ({nome}) =>
    <div>
        <h3>Bebida: {nome}</h3>
    </div>

export {SuperMercado, Legume, Fruta, Bebida}