const myPromisse = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {

            }
            ,
            3000
        )
    }
)

const Questao03 = () => {

    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then(
            (response) => {
                return response.json()
            }
        )
        .then(
            (data) => {
                console.table(data.map(
                    (country) => country.capital[0] + "-" + country.population
                ))
            }
        )
        .catch(error => console.log(error))
        
    return (

    )
}