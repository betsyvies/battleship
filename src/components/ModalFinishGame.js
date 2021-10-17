import React from 'react';
import { useGame } from './GameProvider';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

const ModalFinishGame = () => {
  const history = useHistory();
  const { games, userName, modal, setModal } = useGame();

  const handleRestart = (e) => {
    e.preventDefault();
    history.push('/')
    setModal({show: false, title: ''});
  }
  const sendListFinishedGames = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/ListFinishedGames', 
      state: {
      userName,
      games,
      }
    })
  }

  return (
      <div className="modal">
        <div className="modal-content">
          <h2>{modal.title}</h2>
          <div className="flex-center">
          <Button
            variant="contained"
            type="submit"
            sx={{ margin: '0.5rem' }}
            onClick={handleRestart} 
          >
            Intentar de nuevo
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{ margin: '0.5rem' }}
            onClick={sendListFinishedGames} 
          >
            Juegos terminados
          </Button>
          </div>
        </div>
      </div>
  );
};

export default ModalFinishGame;
