import React, { useState } from 'react';
import { useGame } from './GameProvider';

const Square = ({ ship }) => {
  const {
    accFound,
    turn,
    setModal,
    setAlert,
    setTurn,
    setShipsFound,
    setIdShip,
    setGames,
  } = useGame();
  const [showName, setshowName] = useState(false);
  const [disable, setDisable] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setshowName(true)
    setDisable(true)
    if (!disable) {
      if (ship.id) {
        setShipsFound(prevState => {
          if (ship?.id) {
            if (prevState[ship.id]) {
              return {
                ...prevState,
                [ship.id]: {
                  ...prevState[ship.id],
                  accFound: prevState[ship.id].accFound + 1
                }
              };
            } else {
              return {
                ...prevState, [ship.id]: {
                  accFound: 1,
                  length: ship.length
                }
              };
            }
          }
          return { ...prevState };
        });
        setIdShip(ship.id);
        setAlert({
          message: 'Acertaste un tiro',
          style: 'info',
        })
      } else {
        setAlert({
          message: 'Fallaste un tiro',
          style: 'error',
        })
      }
      if (turn === 1 && accFound < 10) {
        setModal({show: true, title: 'Qué pena, intentalo de nuevo'})
        setGames(prevState => [ ...prevState, {
          game: 'perdida',
          ship: accFound
        }])
      }
      if (accFound === 10) {
        setModal({show: true, title: '¡Felicidades, ganaste!'})
        setGames(prevState => [ ...prevState, {
          game: 'ganada',
          ship: accFound
        }])
      }
      setTurn(prevState => (prevState - 1));
    }
  }
  return (
    <button
      className="square"
      disabled={disable}
      onClick={handleClick}
    >
      {showName ? ship.name : ''}
    </button>
  );
}

export default Square;