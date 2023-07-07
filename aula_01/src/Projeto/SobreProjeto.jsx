import { Container, Box, Typography } from "@mui/material"

const SobreProjeto = () => {
    return (
        <Container>
            <Box sx={{ height: '900px', weight: '200px', backgroundColor: 'none' }}>
                <Typography sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '30px',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    fontFamily: 'Pokemon X and Y'
                }}>
                    Sobre
                </Typography>
            </Box>
        </Container>
    )
}

export default SobreProjeto