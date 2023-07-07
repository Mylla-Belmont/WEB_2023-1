const FilhoB = ({vetor, mensagemPai}) => {

    const menorElemento = () => {
        const menor = Math.min(...vetor)
        mensagemPai(menor)
    }

    return (
        <div>
            <button onClick={
                () => {
                    menorElemento()
                }
            }>
                Calcular Menor
            </button>
        </div>
    )
}

export default FilhoB