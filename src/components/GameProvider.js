import { createContext, useContext } from 'react';

export const GameContext = createContext({
  userName: '',
  turn: '',
  setTurn: () => {},
  shipsFound: {},
  setShipsFound: () => {},
  idShip: '',
  setIdShip: () => {},
  accFound: 0,
  setAccFound: () => {},
  alert: {
    message: '',
    style: '',
  },
  setAlert: () => {},
  modal: {
    show: false,
    title: '',
  },
  setModal: () => {},
  games: [],
  setGames: () => {},
});

export const useGame = () => useContext(GameContext);
