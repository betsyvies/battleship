import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { handlePositionShips } from '../squared';
import Square from './Square';

const Board = () => {
  const [positionShip, setPositionShip] = useState([[], [], [], [], [], [], [], [], [], []]);

  useEffect(() => {
    const squared = handlePositionShips();
    setPositionShip(squared);
  }, []);

  return (
    <>
      <div className="board">
        <div className="board-row">
          {
            positionShip[0].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[1].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[2].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[3].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[4].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[5].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[6].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[7].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[8].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
        <div className="board-row">
          {
            positionShip[9].map((elem) => (
              <Square
                key={elem.key || uuidv4()}
                ship={elem || {}}
              />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Board;
