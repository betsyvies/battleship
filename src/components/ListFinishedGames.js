import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import TableGames from './TableGames';

const ListFinishedGames = () => {
  const location = useLocation();
  const history = useHistory();

  const userName = location.state?.userName;
  const games = location.state?.games;
  const gamesWon = location.state.games.length;

  const handleRestart = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/',
      state: {
        userName,
        games,
      },
    });
  };
  return (
    <>
      <h1 className="text-center">Lista de partidas jugadas</h1>
      <div className="flex-space-around">
        <span className="status flex-center">
          Jugador:
          {userName}
        </span>
        <span className="status flex-center">
          Partidas:
          {gamesWon}
        </span>
        <Button
          variant="contained"
          onClick={handleRestart}
        >
          Restart
        </Button>
      </div>
      <TableGames games={games} />
    </>
  );
};

export default ListFinishedGames;
