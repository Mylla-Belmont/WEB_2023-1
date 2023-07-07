import { useEffect } from "react"
import axios from "axios"

const GetPokemon = ({ setId, setName, setImagesPokemon, types, generations }) => {

    function penulIndexOf(string, substring) {
        const lastIndex = string.lastIndexOf(substring);
        const penulIndex = string.lastIndexOf(substring, lastIndex - 1);
        return penulIndex;
    }

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/generation/${generations}`)
            .then((res) => {
                let list = res.data.pokemon_species
                let infoId = []
                let infoNames = []
                let infoSprites = []
                let requests = list.map((specie) => {
                    return axios.get(`https://pokeapi.co/api/v2/pokemon/${specie.url.substring(penulIndexOf(specie.url, "/") + 1)}`)
                })
                Promise.all(requests)
                    .then((results) => {
                        results.forEach((resultado) => {
                            let id = resultado.data.id
                            let type = resultado.data.types.map((type) => type.type.name)
                            let name = resultado.data.name.charAt(0).toUpperCase() + resultado.data.name.slice(1)
                            let sprite_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                            for (let index = 0; index < types.length; index++)
                                if (types[index].value === type[0] || types[index].value === type[1]) {
                                    infoId.push(id)
                                    infoNames.push(name)
                                    infoSprites.push(sprite_url)
                                }
                            })
                            setId(infoId)
                            setName(infoNames)
                            setImagesPokemon(infoSprites)
                    })
                    .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
    }
        ,
        [setId, setName, setImagesPokemon, generations, types]
    )

    return (
        console.log("getPokemon")
    )
}

export default GetPokemon