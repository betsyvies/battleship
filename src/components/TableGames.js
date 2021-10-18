import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableGames = ({ games }) => (
  <TableContainer
    component={Paper}
    sx={{
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      margin: '2rem',
    }}
  >
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Numero</TableCell>
          <TableCell align="center">Partidas</TableCell>
          <TableCell align="center">Barcos</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {games?.map((game, index) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" component="th" scope="row">
              {index + 1}
            </TableCell>
            <TableCell align="center">{game.game}</TableCell>
            <TableCell align="center">{game.ship}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

TableGames.propTypes = {
  games: PropTypes.arrayOf({
    id: PropTypes.string,
    game: PropTypes.string,
    ship: PropTypes.number,
  }).isRequired,
};

export default TableGames;
