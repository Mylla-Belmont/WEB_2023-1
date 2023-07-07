const Temperatura = () => {

    const celsiusParaFahrenheit = (c) =>{
        return c * 1.8 + 32;
    } 

    const fahrenheitParaCelsius = (f) => {
        return (f - 32) / 1.8; 
    }

    const kelvin = (k) => {
        let kToC = k - 273;
        let kToF = 1.8 * (k - 273) + 32;
        return {
            kToC,
            kToF
        }
    }

  return (
    <div>
        <h1>Celcius para Fahrenheit: {celsiusParaFahrenheit(32)}</h1>
        <h1>Fahrenheit para Celcius: {fahrenheitParaCelsius(89.6)}</h1>
        <h1>kelvin para Celsius: {kelvin(305.15).kToC}</h1>
        <h1>kelvin para Fahrenheit: {kelvin(305.15).kToF}</h1>
    </div>
  )
}

export default Temperatura;