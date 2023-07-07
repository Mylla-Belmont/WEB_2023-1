import { FormControl, InputLabel, Select, Chip, Box, MenuItem } from "@mui/material"
import * as imagens from "../images/logoTypes/index"
import { useState } from "react"

export const types = [
    { value: "bug", imagem: imagens.BugLogo },
    { value: "dark", imagem: imagens.DarkLogo },
    { value: "dragon", imagem: imagens.DragonLogo },
    { value: "electric", imagem: imagens.ElectricLogo },
    { value: "fairy", imagem: imagens.FairyLogo },
    { value: "fighting", imagem: imagens.FightingLogo },
    { value: "fire", imagem: imagens.FireLogo },
    { value: "flying", imagem: imagens.FlyingLogo },
    { value: "ghost", imagem: imagens.GhostLogo },
    { value: "grass", imagem: imagens.GrassLogo },
    { value: "ground", imagem: imagens.GroundLogo },
    { value: "ice", imagem: imagens.IceLogo },
    { value: "normal", imagem: imagens.NormalLogo },
    { value: "poison", imagem: imagens.PoisonLogo },
    { value: "psychic", imagem: imagens.PsychicLogo },
    { value: "rock", imagem: imagens.RockLogo },
    { value: "steel", imagem: imagens.SteelLogo },
    { value: "water", imagem: imagens.WaterLogo },
]

const imagem = (add) => {
    return (
        <img src={add} alt="img" width={60} />
    )
}

function TypeSelection({ setTypes, styleTextField }) {

    const [selectedTypes, setSelectedTypes] = useState([])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedTypes(typeof value === 'string' ? value.split(',') : value)
        setTypes(value)
    }

    return (
        <div>
            <FormControl
                sx={{
                    mb: 3,
                    width: 400,
                    ...styleTextField
                }}
            >
                <InputLabel
                    id="demo-multiple-types-label"
                >
                    Tipos
                </InputLabel>
                <Select
                    labelId="demo-multiple-types-label"
                    id="demo-multiple-types"
                    multiple
                    value={selectedTypes}
                    onChange={handleChange}
                    renderValue={(selected) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: ' wrap',
                                gap: 0.5,
                            }}
                        >
                            {selected.map((value) => (
                                <Chip
                                    key={value.value}
                                    label={imagem(value.imagem)}
                                />)
                            )}
                        </Box>
                    )}
                >
                    {types.map((type) => (
                        <MenuItem
                            key={type.value}
                            value={type}
                        >
                            <img src={type.imagem} alt={type.value} width={60} />
                        </MenuItem>
                    )
                    )}
                </Select>
            </FormControl>
        </div >
    )
}

export default TypeSelection