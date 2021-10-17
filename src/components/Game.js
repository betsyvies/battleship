import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { GameContext } from './GameProvider';
import Board from './Board';
import Alert from './Alert';
import ModalFinishGame from './ModalFinishGame';

const Game = () => {
  const location = useLocation();
  const userName = location.state.name
  // const beforeGames = location.state.games;
  const [turn, setTurn] = useState(location.state.turn);
  const [shipsFound, setShipsFound] = useState({})
  const [idShip, setIdShip] = useState('');
  const [accFound, setAccFound] = useState(0)
  const [alert, setAlert] = useState({
    message: '',
    style: 'success',
  });
  const [modal, setModal] = useState({
    show: false,
    title: '',
  })
  const [games, setGames] = useState([]);
  const value = useMemo(
    () => ({
      userName,
      turn,
      setTurn,
      shipsFound,
      setShipsFound,
      idShip,
      setIdShip,
      accFound: 0,
      setAccFound,
      alert,
      setAlert,
      modal,
      setModal,
      games,
      setGames,
    }),
    [turn]
  );

  useEffect(() => {
    if (Object.keys(shipsFound).length) {
      if (shipsFound[idShip].accFound === shipsFound[idShip].length) {
        setAccFound(prevState => prevState + 1);
        setAlert({
          message: '¡Genial! Hundiste el barco',
          style: 'success',
        })
      }
    }
  }, [shipsFound])

  return (
    <GameContext.Provider value={value}>
      <div>
        <h1 className="text-center">¡Bienvenido {userName}!</h1>
        <div className="flex-space-around margin-1">
          <div className="status">Turnos: <span>{turn}</span></div>
          <div className="status">Barcos Hundidos: <span>{accFound}/10</span></div>
        </div>
        {alert.message ? <Alert alert={alert} /> : <></>}
        <div className="margin-1">
          <Board />
        </div>
        {
          modal.show
            ? <ModalFinishGame /> : <></>
        }
      </div>
    </GameContext.Provider>
  );
}

export default Game;
