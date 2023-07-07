import { useState, useEffect } from "react"

const Cidades = ({cidade1, cidade2, cidade3, cidade4}) => {

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)
    const [contador3, setContador3] = useState(0)
    const [contador4, setContador4] = useState(0)
    const [maisVotos, setMaisVotos] = useState("")
    const [menosVotos, setMenosVotos] = useState("")

    useEffect (
        () => {
            let cidades = [contador1, contador2, contador3, contador4]
            const nomes = [cidade1, cidade2, cidade3, cidade4]
            let maior = contador1;
            let menor = contador1;

            for (let i = 1; i < cidades.length; i++) {
                if (cidades[i] >= maior) maior = cidades[i]
                if (cidades[i] <= menor) menor = cidades[i]
            }

            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] === maior) setMaisVotos(nomes[i])
                if (cidades[i] === menor) setMenosVotos(nomes[i])
            }
        }
        ,
        [contador1, contador2, contador3, contador4, cidade1, cidade2, cidade3, cidade4]
    )

    const aumentarContador1 = () => {
        setContador1((contadorAnterior)=>contadorAnterior+1)
    }

    const aumentarContador2 = () => {
        setContador2((contadorAnterior)=>contadorAnterior+1)
    }
    
    const aumentarContador3 = () => {
        setContador3((contadorAnterior)=>contadorAnterior+1)
    }

    const aumentarContador4 = () => {
        setContador4((contadorAnterior)=>contadorAnterior+1)
    }

    return (
        <div>
            <h1> {cidade1} tem {contador1} votos </h1>
            <h1> {cidade2} tem {contador2} votos </h1>
            <h1> {cidade3} tem {contador3} votos </h1>
            <h1> {cidade4} tem {contador4} votos </h1>

            <button onClick={aumentarContador1}> Votar Fortaleza </button>
            <button onClick={aumentarContador2}> Votar Quixadá </button>
            <button onClick={aumentarContador3}> Votar Iguatu </button>
            <button onClick={aumentarContador4}> Votar Sobral </button>

            <h2> Cidade mais votada: {maisVotos} </h2>
            <h2> Cidade menos votada: {menosVotos} </h2>
        </div>
    )
}

export default Cidades