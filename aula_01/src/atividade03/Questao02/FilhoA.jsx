const FilhoA = ({vetor, mensagemPai}) => {

    const maiorElemento = () => {
        const maior = Math.max(...vetor)
        mensagemPai(maior)
    }

    return (
        <div>
            <button onClick={
                () => {
                    maiorElemento()
                }
            }>
                Calcular Maior
            </button>
        </div>
    )
}

export default FilhoA