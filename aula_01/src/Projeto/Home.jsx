import { Box, Container } from "@mui/material"
import paisagem from "./images/paisagem.jpg"

const Home = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    gap: 6
                }}
            >
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"}
                    alt="pokemonURL"
                    width="30%"
                    height="50%"
                    style={{
                        border: "2px solid #00e676",
                        backgroundImage: `url(${paisagem})`,
                        backgroundSize: 'cover',
                        borderRadius: '5px'
                    }}
                />
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}
                    alt="pokemonURL"
                    width="30%"
                    height="50%"
                    style={{
                        border: "2px solid #00e676",
                        backgroundImage: `url(${paisagem})`,
                        backgroundSize: 'cover',
                        borderRadius: '5px'
                    }}
                />
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"}
                    alt="pokemonURL"
                    width="30%"
                    height="50%"
                    style={{
                        border: "2px solid #00e676",
                        backgroundImage: `url(${paisagem})`,
                        backgroundSize: 'cover',
                        borderRadius: '5px'
                    }}
                />
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"}
                    alt="pokemonURL"
                    width="30%"
                    height="50%"
                    style={{
                        border: "2px solid #00e676",
                        backgroundImage: `url(${paisagem})`,
                        backgroundSize: 'cover',
                        borderRadius: '5px'
                    }}
                />
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"}
                    alt="pokemonURL"
                    width="30%"
                    height="50%"
                    style={{
                        border: "2px solid #00e676",
                        backgroundImage: `url(${paisagem})`,
                        backgroundSize: 'cover',
                        borderRadius: '5px'
                    }}
                />
                <img
                    src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"}
                    alt="pokemonURL"
                    width="30%"
                    height="50%"
                    style={{
                        border: "2px solid #00e676",
                        backgroundImage: `url(${paisagem})`,
                        backgroundSize: 'cover',
                        borderRadius: '5px'
                    }}
                />
                <Box sx={{
                    height: "100px",
                    width: "100px"
                }} />
            </Box>
        </Container>
    )
}

export default Home