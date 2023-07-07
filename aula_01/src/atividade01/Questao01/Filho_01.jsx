const Filho = ({altura, peso}) => {

   const CalculadoraIMC = (altura, peso) => peso/(altura*altura)

   const Mensagem = (imc) => {
      if (imc < 18) return <h1> Abaixo do peso </h1>
      if (imc > 25) return <h1> Acima do peso </h1>
      return <h1> Peso ideal </h1>
   }

   const imc = (CalculadoraIMC(altura, peso))

   return (
      <div>
         <h1> Seu IMC é: {imc.toFixed(2)}</h1>
         {Mensagem(imc)}
      </div>
   )
}

export default Filho