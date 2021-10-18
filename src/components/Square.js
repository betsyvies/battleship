/*  */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useGame } from './GameProvider';

const Square = ({ ship }) => {
  const {
    accFound,
    turn,
    setAlert,
    setTurn,
    setShipsFound,
    setIdShip,
    setModal,
    setGames,
  } = useGame();

  const [showName, setshowName] = useState(false);
  // const [accClick, setshowAccClick] = useState(0);
  const squaredButton = useRef('');
  const squaredButtonShip = useRef('');

  const handleClickShip = (e) => {
    e.preventDefault();
    setshowName(true);
    squaredButtonShip.current.setAttribute('disabled', true);
    if (ship?.id) {
      setShipsFound((prevState) => {
        if (ship?.id) {
          if (prevState[ship?.id]) {
            return {
              ...prevState,
              [ship.id]: {
                ...prevState[ship?.id],
                accFound: prevState[ship?.id].accFound + 1,
              },
            };
          }
          return {
            ...prevState,
            [ship?.id]: {
              accFound: 1,
              length: ship.length,
            },
          };
        }
        return { ...prevState };
      });
      setIdShip(ship.id);
      setAlert({
        message: 'Acertaste un tiro',
        style: 'info',
      });
    } else {
      setAlert({
        message: 'Fallaste un tiro',
        style: 'error',
      });
    }
    if (turn === 1 && accFound < 10) {
      const id = `P${accFound}-${Math.floor(Math.random() * (2 - 0)) + 0}`;
      setModal({ show: true, title: 'Qué pena, intentalo de nuevo' });
      setGames((prevState) => [...prevState, {
        id,
        game: 'perdida',
        ship: accFound,
      }]);
    }
    setTurn((prevState) => (prevState - 1));
  };
  const handleClick = (e) => {
    e.preventDefault();
    squaredButton.current.setAttribute('disabled', true);
    // setTurn((prevState) => (prevState - 1));
  };
  return (
    <>
      {
      ship ? (
        <button
          type="button"
          className="square"
          ref={squaredButtonShip}
          onClick={handleClickShip}
        >
          {showName ? ship?.name : ''}
        </button>
      ) : (
        <button
          type="button"
          aria-label="Save"
          className="square"
          ref={squaredButton}
          // onClick={handleClick}
        />
      )
    }
    </>
  );
};

Square.propTypes = {
  ship: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    length: PropTypes.number,
    key: PropTypes.string,
  }).isRequired,
};

export default Square;
