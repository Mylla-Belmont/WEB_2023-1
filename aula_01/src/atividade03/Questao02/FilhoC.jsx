const FilhoC = ({vetor, mensagemPai}) => {

    const mediaElemento = () => {
        let media = 0;
        let cont = 0;
        for (let i = 0; i < vetor.length; i++) {
            media += vetor[i]
            cont++
        }
        mensagemPai((media/cont))
    }

    return (
        <div>
            <button onClick={
                () => {
                    mediaElemento()
                }
            }>
                Calcular Media
            </button>
        </div>
    )
}

export default FilhoC