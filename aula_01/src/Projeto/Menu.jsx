import { AppBar, Container, Toolbar, Typography, Box, Menu, MenuItem, Button, Tooltip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AdbIcon from "@mui/icons-material/CatchingPokemon";
import SettingsIcon from "@mui/icons-material/Settings";
import paisagem from "./images/paisagem.jpg";
import { Link } from "react-router-dom";
import React from "react";

const MyMenu = () => {
    const [anchorElPokemon, setAnchorElPokemon] = React.useState(null);
    
    const handleOpenPokemonMenu = (event) => {
        setAnchorElPokemon(event.currentTarget);
    };

    const handleClosePokemonMenu = () => {
        setAnchorElPokemon(null);
    };

    function pokemonDropMenu() {
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Abrir opções">
                    <Button
                        onClick={handleOpenPokemonMenu}
                        sx={{
                            my: 2,
                            mx: 2,
                            color: 'white',
                            fontSize: "20px",
                            fontWeight: 700,
                            fontFamily: 'Pokemon X and Y'
                        }}
                    >
                        Pokédex
                    </Button>
                </Tooltip>
                <Menu
                    id="menu-appbar-pokemon"
                    anchorEl={anchorElPokemon}
                    open={Boolean(anchorElPokemon)}
                    onClose={handleClosePokemonMenu}
                    sx={{ marginLeft: 1 }}
                >
                    <MenuItem 
                        onClick={handleClosePokemonMenu}
                        component={Link}
                        to={"Registrar"}
                    >
                        <Typography textAlign="center">
                            Registrar
                        </Typography>
                    </MenuItem>
                    <MenuItem 
                        onClick={handleClosePokemonMenu}
                        component={Link}
                        to={"Lista"}
                    >
                        <Typography textAlign="center">
                            Favoritos
                        </Typography>
                    </MenuItem>
                </Menu>
            </Box>
        );
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    backgroundImage: `url(${paisagem})`,
                    backgroundSize: 'cover',    
                    backgroundPosition: 'bottom',
                    fullWidth: true
                }}>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component={Link}
                            to={"Home"}
                            sx={{
                                color: 'white',
                                display: 'flex',
                                fontWeight: 700,
                                fontSize: "30px",
                                alignItems: 'center',
                                textDecoration: 'none',
                                letterSpacing: '.1rem',
                                fontFamily: 'Pokemon X and Y'
                            }}
                        >
                            My Pokédex
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0.1, display: { xs: 'flex', md: 'flex' } }}>
                        {pokemonDropMenu()}
                        <Button
                            component={Link}
                            to={"Pokemon"}
                            sx={{  my: 2, mx: 2, color: 'white', fontWeight: 700, fontFamily: 'Pokemon X and Y', fontSize: "20px" }}
                        >
                            Pokémon
                        </Button>
                        <Button
                            component={Link}
                            to={"Treinadores"}
                            sx={{ my: 2, mx: 2, color: 'white', fontWeight: 700, fontFamily: 'Pokemon X and Y', fontSize: "20px" }}
                        >
                            Treinadores
                        </Button>
                        <Button
                            component={Link}
                            to={"SobreProjeto"}
                            sx={{ my: 2, mx: 2, color: 'white', fontWeight: 700, fontFamily: 'Pokemon X and Y', fontSize: "20px" }}
                        >
                            Sobre
                        </Button>
                    </Box>

                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <Tooltip title="Notificações">
                            <NotificationsIcon sx={{ color: 'white', mx: 1 }} />
                        </Tooltip>
                        <Tooltip title="Configurações">
                            <SettingsIcon sx={{ color: 'white', mx: 1 }} />
                        </Tooltip>
                        <Tooltip title="Perfil">
                            <AccountCircleIcon sx={{ color: 'white', mx: 1 }} />
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MyMenu;