import { useState } from "react"

const Questao01A = () => {

    const [media, setMedia] = useState(0);
    
    const enviarMedia = (media) => {
        setMedia(media)
    }

    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ]
    
    return (
        <div>
            {/* Chama o componente Questao01B passando o vetor de  alunos e a mesagem para o pai*/}
            {/* a mensagemPai chama a função enviarMedia, que passa as medias calculadas para o useState */}
            <Questao01B alunos={alunos} mensagemPai={enviarMedia}/>
            <h1> {media + ""} </h1>
        </div>
    )
}

function Questao01B ({alunos, mensagemPai}) {

    // função que calcula a media dos elementos. Percorre o vetor de alunos e armazena 
    // em mediaTotal as medias calculas, retornando elas para o pai
    const mediaElementos = () => {
        let mediaTotal = []
        
        for (let i = 0; i < alunos.length; i++) {
            mediaTotal[i] = (alunos[i].notas.ap1 + alunos[i].notas.ap2)/2
        }
        mensagemPai(mediaTotal)
    }

    return (
        <div>
            <button onClick={
                () => { 
                    mediaElementos() 
                }
            }>
                Calcular Media
            </button>
        </div>
    )
}

export default Questao01A
