const Calculadora_01 = () => {

    const somar = (x,y) => {
        return x + y;
    }

    const subtrair = (x,y) => {
        return x - y;
    }

    const multiplicar = (x,y) => {
        return y * y;
    }

    return (
        <div>
            <h1>Resultado soma:  {somar(2,2)} </h1>
            <h1>Resultado subtração:  {subtrair(2,2)} </h1>
            <h1>Resultado multiplicação:  {multiplicar(2,2)} </h1>
        </div>
    )
}

export default Calculadora;