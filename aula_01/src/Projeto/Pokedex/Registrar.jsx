import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import { Typography, Box, Button, IconButton } from "@mui/material"
import GenerationSelect from "./GenerationSelect"
import paisagem from "../images/paisagem.jpg"
import TypeSelection from "./TypeSelection"
import GetPokemon from "./getPokemon"
import { useState } from "react"
// import Context from './Context'

const Registrar = () => {

    const styleTextField = {
        '.MuiInputBase-input': {
            color: "#00e676"
        },
        '& .MuiInputLabel-root': {
            color: "#00e676 !important"
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#00e676'
            }
        },
        '& .MuiOutlinedInput-root:hover fieldset': {
            borderColor: '#00e676',
        },
        '& .MuiOutlinedInput-root.Mui-focused fieldset': {
            borderColor: '#00e676',
        }
    }

    const [id, setId] = useState([])
    const [name, setName] = useState([])
    const [types, setTypes] = useState([])
    const [favorites, setFavorite] = useState([])
    const [idPokemon, setNextPokemon] = useState(0)
    const [generations, setGenerations] = useState("")
    const [imagePokemonURL, setImagesPokemon] = useState([])

    function handSubmit(event) {
        event.preventDefault()
        console.log(id)
        console.log(name)
        console.log(types)
        console.log(generations)
        console.log(imagePokemonURL)
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    height: "475px",
                    width: "100%"
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        alignSelf: 'flex-start',
                        width: "50%"
                    }}
                    component="form"
                    onSubmit={handSubmit}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontFamily: 'Pokemon X and Y',
                            fontSize: "25px",
                            letterSpacing: '.2rem',
                            mb: 2,
                            mt: 4
                        }}
                    >
                        Filtrar pokémon
                    </Typography>
                    <GenerationSelect setGenerations={setGenerations} styleTextField={styleTextField} />
                    <TypeSelection setTypes={setTypes} styleTextField={styleTextField} />
                    <Box>
                        <Button
                            onClick={() => setFavorite({ 
                                id: id[idPokemon], 
                                name: name[idPokemon], 
                                types: types[idPokemon], 
                                generations: generations[idPokemon], 
                                imagePokemonURL: imagePokemonURL[idPokemon] })}
                            sx={{
                                fontFamily: 'Pokemon X and Y',
                                backgroundColor: "#00e676",
                                fontWeight: 700,
                                color: "#141A40",
                                width: "120px",
                                fontSize: "18px",
                                letterSpacing: '.1rem'
                            }}
                        >
                            {/* <Context favorite={favorites}/> */}
                            {console.log(favorites)}
                            Adicionar
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: "65%",
                        height: "90%",
                        mt: 3
                    }}
                >
                    <GetPokemon
                        setId={setId}
                        types={types}
                        setName={setName}
                        generations={generations}
                        setImagesPokemon={setImagesPokemon}
                    />
                    <Typography
                        sx={{
                            color: '#00e676',
                            fontFamily: 'Pokemon X and Y',
                            letterSpacing: '.4rem',
                            fontSize: "20px",
                            fontWeight: 900,
                            mb: 1
                        }}
                    >
                        {name[idPokemon]}
                    </Typography>
                    <img
                        src={imagePokemonURL[idPokemon]}
                        alt="pokemonURL"
                        width="65%"
                        height="80%"
                        style={{
                            border: "2px solid #00e676",
                            backgroundImage: `url(${paisagem})`,
                            backgroundSize: 'cover',
                            borderRadius: '5px'
                        }}
                    />
                    <Box
                        sx={{
                            mt: 2
                        }}
                    >
                        <IconButton
                            aria-label='buttonLeft'
                            onClick={() => setNextPokemon(idPokemon - 1)}
                            sx={{ color: '#00e676' }}
                        >
                            <ArrowCircleLeftIcon />
                        </IconButton>
                        <IconButton
                            aria-label='buttonRight'
                            onClick={() => setNextPokemon(idPokemon + 1)}
                            sx={{ color: '#00e676' }}
                        >
                            <ArrowCircleRightIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                height: "100px",
                width: "100px"
            }} />
        </>
    )
}

export default Registrar