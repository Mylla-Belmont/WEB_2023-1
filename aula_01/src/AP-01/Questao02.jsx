import { useState, useEffect } from "react"
import axios from "axios"

const Questao02 = () => {

    // UseState que armazena os valores de id, que são alterados conforme o usuário utiliza os botões
    // e a imagem, que alterna conforme o id
    const [id,setId] = useState(0)
    const [imagem,setImagem] = useState("")

    useEffect(
        ()=>{
            axios.get("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png")
            .then(
                (response) => {
                    setImagem(response.data)
                }
            )
            .catch(error=>console.log(error))
        }
        ,
        [id]
    )

    return (
        <div>
            <img src={imagem} alt="pokemon" style={{ width: '200px', }}/>
            <button
               onClick={()=>setId(id+1)}
            >
                frente
            </button>
            <button
                onClick={()=>setId(id)}
            >
                costas
            </button>
        </div>
    )
}

export default Questao02