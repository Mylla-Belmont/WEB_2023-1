import { FormControl, InputLabel, Select, MenuItem, Box, Chip } from "@mui/material"
import { useState } from "react";

const generations = [
    '1º Geração',
    '2º Geração',
    '3º Geração',
    '4º Geração',
    '5º Geração',
    '6º Geração',
    '7º Geração',
    '8º Geração',
    '9º Geração',
]

function getGeneration(value) {
    for (let index = 0; index < generations.length; index++) 
        if (generations[index] === value)
            return (index + 1).toString()
    return null
}

function GenerationSelect({ setGenerations, styleTextField }) {

    const [selectedGenerations, setSelectedGenerations] = useState([])

    const handleChange = (event) => {
        const {
            target: { value },
        } = event
        setSelectedGenerations(typeof value === 'string' ? value.split(',') : value)
        setGenerations(getGeneration(value))
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
                    id="demo-multiple-generation-label"
                >
                    Geração
                </InputLabel>
                <Select
                    labelId="demo-multiple-generation-label"
                    id="demo-multiple-generation"
                    value={selectedGenerations}
                    onChange={handleChange}
                    renderValue={(selected) => (
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: ' wrap',
                                gap: 1,
                            }}
                        >
                            {selected.map((value) => (
                                <Chip
                                    key={value}
                                    label={value}
                                    sx={{
                                        backgroundColor: "#00e676",
                                        color: "#141A40"
                                    }}
                                />)
                            )}
                        </Box>
                    )
                    }
                >
                    {generations.map((generation) => (
                        <MenuItem
                            key={generation}
                            value={generation}
                        >
                            {generation}
                        </MenuItem>
                    )
                    )}
                </Select>
            </FormControl>
        </div>
    )
}

export default GenerationSelect