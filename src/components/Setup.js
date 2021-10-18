import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useSetup } from '../ProvideStart';

const Setup = () => {
  const history = useHistory();
  const location = useLocation();
  const { setup } = useSetup();

  const { from } = location.state || { from: { pathname: '/' } };

  const userName = location.state?.userName;
  const games = location.state?.games;

  const [user, setUser] = useState({
    name: userName || '',
    turn: '',
  });
  const nameInput = useRef('');

  const handleChange = (e) => {
    const nam = e.target.name;
    const val = e.target.value;
    setUser((prev) => ({ ...prev, [nam]: val }));
  };

  const handleStart = async (e) => {
    e.preventDefault();
    setup(() => {
      history.replace(from);
      history.push({
        pathname: '/Board',
        state: {
          ...user,
          games: games || [],
        },
      });
    });
  };

  useEffect(() => {
    if (userName) {
      nameInput.current.value = userName;
    }
  }, [userName]);

  return (
    <>
      <h1 className="text-center">Battle Ship</h1>
      <form onSubmit={handleStart}>
        <div>
          <label className="flex-direction-colum margin-05" htmlFor="name">
            Nombre
            <input
              type="text"
              name="name"
              required="required"
              className="margin-1-0"
              ref={nameInput}
              onChange={handleChange}
            />
          </label>
          <label className="flex-direction-colum margin-05" htmlFor="turn">
            Cantidad de turnos
            <input
              type="number"
              value={user.turn}
              name="turn"
              required="required"
              className="margin-1-0"
              onChange={handleChange}
            />
          </label>
          <label className="margin-05" htmlFor="turn">
            <input type="radio" name="turn" value="10000" onChange={handleChange} />
            Modo facil
            <input type="radio" name="turn" value="100" onChange={handleChange} />
            Modo intermedio
            <input type="radio" name="turn" value="50" onChange={handleChange} />
            Modo dificil
          </label>
        </div>
        <div className="div-button">
          <Button
            variant="contained"
            type="submit"
            sx={{ margin: '1.5rem' }}
          >
            Start
          </Button>
        </div>
      </form>
    </>
  );
};

export default Setup;
