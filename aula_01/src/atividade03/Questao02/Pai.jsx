// import * as Filhos from './Filhos'
import { useState } from "react" 
import FilhoA from "./FilhoA"
import FilhoB from "./FilhoB"
import FilhoC from "./FilhoC"

const Pai = () => {

    const [maior, setMaior] = useState(0)
    const [menor, setMenor] = useState(0)
    const [media, setMedia] = useState(0)

    const enviarMaior = (maior) => {
        setMaior(maior)
    }

    const enviarMenor = (menor) => {
        setMenor(menor)
    }

    const enviarMedia = (media) => {
        setMedia(media)
    }

    return (
        <div>
            <h1> Calculo Vetor </h1>
            <h1> {maior} </h1>
            <h1> {menor} </h1>
            <h1> {media} </h1>
            <FilhoA vetor={[1,2,3,4,5]} mensagemPai={enviarMaior}/>
            <FilhoB vetor={[1,2,3,4,5]} mensagemPai={enviarMenor}/>
            <FilhoC vetor={[1,2,3,4,5]} mensagemPai={enviarMedia}/>
        </div>
    )

}

export default Pai