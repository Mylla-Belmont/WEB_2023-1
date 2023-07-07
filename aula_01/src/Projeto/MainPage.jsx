import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Container } from "@mui/material"

import Registrar from "./Pokedex/Registrar"
import Editar from "./Pokedex/Editar"
import Lista from "./Pokedex/Lista"

import SobreProjeto from "./SobreProjeto"
import Treinadores from "./Treinadores"
import Pokemon from "./Pokemon"

import Home from "./Home"
import Menu from "./Menu"

const MainPage = () => {

    return (
        <BrowserRouter>
            <Menu />
            <Container sx={{mt: 8}}>
                <Routes>
                    <Route path="Home" element={<Home/>} />
                    <Route path="Editar/:id" element={<Editar/>} />
                    <Route path="Pokemon" element={<Pokemon/>} />
                    <Route path="Treinadores" element={<Treinadores/>} />
                    <Route path="SobreProjeto" element={<SobreProjeto/>} />
                    <Route path="Lista" element={<Lista/>} />
                    <Route path="Registrar" element={<Registrar/>} />
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage