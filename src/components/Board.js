import React, { useState, useEffect } from 'react';
import { handlePositionShips } from '../squared';
import Square from './Square';

const Board = () => {
  const [positionShip, setPositionShip] = useState([[],[],[],[],[],[],[],[],[],[]]);

  useEffect(() => {
    const squared = handlePositionShips();
    setPositionShip(squared)
  }, [])

  return (
    <>
      <div className="board">
        <div className="board-row" >
          {
            positionShip[0].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[1].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[2].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[3].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[4].map((elem, index) => (
              <Square
                key={index}
                ship={elem}              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[5].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[6].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[7].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[8].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
        <div className="board-row" >
          {
            positionShip[9].map((elem, index) => (
              <Square
                key={index}
                ship={elem}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Board;
