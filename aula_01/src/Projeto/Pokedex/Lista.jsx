// import { Box, Paper, Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Typography } from "@mui/material"
// import { tableCellClasses } from '@mui/material/TableCell'
// import DeleteIcon from "@mui/icons-material/Delete"
// import IconButton from "@mui/material/IconButton"
// import EditIcon from "@mui/icons-material/Edit"
// import { styled } from '@mui/material/styles'
// import { Link } from "react-router-dom"
// import { types } from "./TypeSelection"
// import { useContext } from 'react'
// import Context from "./Context"

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//     },
//     '&:last-child td, &:last-child th': {
//         border: 0,
//     },
// }));

// const Lista = () => {

//     const { favorites, setFavorites } = useContext(Context)

//     {console.log(favorites)}

//     function deletePokemonById() {
//         if (window.confirm("Deseja deletar esse pokemon?"))
//             alert("Pokemon deletado com sucesso!")
//     }

//     const typeconfig = {
//         color: "white",
//         fontFamily: 'Pokemon X and Y',
//         display: "flex",
//         justifyContent: "center",
//     };

//     return (
//         <Box>
//             <Typography
//                 variant="h4"
//                 fontWeight="bold"
//                 sx={typeconfig}
//             >
//                 Lista de favoritos
//             </Typography>
//             <TableContainer
//                 component={Paper}
//                 sx={{ mt: 4 }}
//             >
//                 <Table
//                     sx={{
//                         minWidth: 650
//                     }}
//                     aria-label="simple table"
//                 >
//                     <TableHead>
//                         <TableRow>
//                             <StyledTableCell> ID </StyledTableCell>
//                             <StyledTableCell> NOME </StyledTableCell>
//                             <StyledTableCell>
//                                 TIPO
//                             </StyledTableCell>
//                             <StyledTableCell> AÇÃO  </StyledTableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {/* {
//                             favorites.map(
//                                 (poke) => {
//                                     return (
//                                         <StyledTableRow key={poke.id}>
//                                             <StyledTableCell>
//                                                 {poke.id}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 {poke.name}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 {poke.types.map((type) => {
//                                                     let index = types.findIndex((tipo) => tipo.value === type)
//                                                     return (
//                                                         <img
//                                                             src={types[index].imagem}
//                                                             alt={type}
//                                                             width={60}
//                                                             key={index}
//                                                         />
//                                                     )
//                                                 }
//                                                 )}
//                                             </StyledTableCell>
//                                             <StyledTableCell>
//                                                 <Box>
//                                                     <IconButton
//                                                         aria-label="edit"
//                                                         sx={{ color: "#00e676" }}
//                                                         component={Link}
//                                                         to={`/Editar/${favorites.id}`}
//                                                     >
//                                                         <EditIcon />
//                                                     </IconButton>
//                                                     <IconButton
//                                                         aria-label="delete"
//                                                         sx={{ color: "#00e676" }}
//                                                         onClick={() => deletePokemonById(favorites.id)}
//                                                     >
//                                                         <DeleteIcon />
//                                                     </IconButton>
//                                                 </Box>
//                                             </StyledTableCell>
//                                         </StyledTableRow>
//                                     )
//                                 }
//                             )
//                         } */}
//                     </TableBody>
//                 </Table>

//             </TableContainer>
//             <Box sx={{
//                 height: "100px",
//                 width: "100px"
//             }} />
//         </Box>
//     )
// }

// export default Lista