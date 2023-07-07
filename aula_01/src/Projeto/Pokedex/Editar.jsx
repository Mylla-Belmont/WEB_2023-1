import { TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button, FormGroup, FormControlLabel, Checkbox, FormLabel } from "@mui/material"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Editar = () => {
    
    const pokemons = [
        { id: 0, nome: "Bubasauro", habitat: "AQU", raridade: {led: true, mit:true} },
        { id: 1, nome: "Pikashu", habitat: "SEL", raridade: {led: true, mit:false}},
        { id: 2, nome: "Charmander", habitat: "URB", raridade: {led: false, mit:true} },
        { id: 3, nome: "Squirtle", habitat: "COS", raridade: {led: true, mit:true} },
        { id: 4, nome: "Bulbasaur", habitat: "POL", raridade: {led: false, mit:true} }
    ]
    
    let { id } = useParams()

    const [nome, setNome] = useState("")
    const [habitat, setHabitat] = useState("")
    const [raridade, setRaridade] = useState({ led: false, mit: false })
    const { led, mit } = raridade

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
        },
        width: "50%"
    }

    useEffect(
        ()=>{
            let pokemon = getPokemonById(id)
            setNome(pokemon.nome)
            setHabitat(pokemon.habitat)
            setRaridade(pokemon.raridade)
        }
        ,
        []
    )

    function getPokemonById(id) {
        for (let index = 0; index < pokemons.length; index++)
            if (id == pokemons[index].id) 
                return pokemons[index]
        return null
    }

    function handleChackbox(event) {
        setRaridade({
            ...raridade,
            [event.target.name]: event.target.checked
        })
    }

    function handSubmit(event) {
        console.log(nome)
        console.log(habitat)
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: "90%"
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
                        mb: 2
                    }}
                >
                    Editar pokémon 
                </Typography>
                <TextField
                    margin="normal"
                    required
                    id="nome"
                    name="Nome"
                    label="Nome"
                    value={nome}
                    sx={{
                        ...styleTextField, mb: 5
                    }}
                    onChange={(event) => setNome(event.target.value)}
                />
                <FormControl
                    sx={styleTextField}
                >
                    <InputLabel id="select-habitat-label">
                        Habitat
                    </InputLabel>
                    <Select
                        labelId="select-habitat-label"
                        label="Habitat"
                        value={habitat}
                        onChange={(event) => setHabitat(event.target.value)}
                    >
                        <MenuItem value="AQU">Aquático</MenuItem>
                        <MenuItem value="SEL">Selvagem</MenuItem>
                        <MenuItem value="CAV">Caverna</MenuItem>
                        <MenuItem value="FLO">Floresta</MenuItem>
                        <MenuItem value="MOT">Montanha</MenuItem>
                        <MenuItem value="PLA">Planície</MenuItem>
                        <MenuItem value="URB">Urbano</MenuItem>
                        <MenuItem value="DES">Deserto</MenuItem>
                        <MenuItem value="TUN">Tundra</MenuItem>
                        <MenuItem value="SUB">Subterrâneo</MenuItem>
                        <MenuItem value="AER">Aéreo</MenuItem>
                        <MenuItem value="COS">Costeiro</MenuItem>
                        <MenuItem value="PAN">Pântano</MenuItem>
                        <MenuItem value="PRA">Praia</MenuItem>
                        <MenuItem value="POL">Polar</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    component="fieldset"
                    variant="standart"
                    sx={{ mt: 2, ml: 2 }}
                >
                    <FormLabel
                        component="legend"
                        sx={{ fontSize: 16, mt: 2, mb: 1, color: "white" }}
                    >
                        Raridade
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            sx={{ color: "white" }}
                            control={
                                <Checkbox
                                    checked={led}
                                    name="led"
                                    onChange={handleChackbox}
                                    sx={{ color: "#00e676" }}
                                />
                            }
                            label="Lendário"
                        />
                        <FormControlLabel
                            sx={{ color: "white" }}
                            control={
                                <Checkbox
                                    checked={mit}
                                    name="mit"
                                    onChange={handleChackbox}
                                    sx={{ color: "#00e676" }}
                                />
                            }
                            label="Mítico"
                        />
                    </FormGroup>
                </FormControl>
                <Box>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            my: 2,
                            fontFamily: 'Pokemon X and Y',
                            backgroundColor: "#00e676",
                            fontWeight: 700,
                            color: "#141A40",
                            width: "120px",
                            fontSize: "18px",
                            letterSpacing: '.1rem'
                        }}
                    >
                        Editar
                    </Button>
                </Box>
            </Box>
            {/* <Box sx={{border:1}}>
                <Typography
                    sx={{
                        color: 'white',
                        fontSize: "30px",
                        fontWeight: 700,
                        fontFamily: 'Pokemon X and Y'
                    }}
                >
                    Pokemon
                </Typography>
            </Box> */}
            <Box sx={{ height: '300px', backgroundColor: 'none' }} />
        </>
    )
}

export default Editar