const getShipH = (squared, row, rowsH, name, numB, length, amount) => { // id = 4B-1-H-5-V6
  const newSquared = [...squared]
  for (let i = 0; i < rowsH.length; i++) {
    newSquared[row][rowsH[i]] = { id: `${name}-${numB}`, name, length, amount }
  }

  return newSquared
};
const getShipV = (squared, rowsH, colum, name, numB, length, amount) => { // id = 4B-1-H-5-V6
  const newSquared = [...squared]
  for (let i = 0; i < rowsH.length; i++) {
    squared[rowsH[i]][colum] = { id: `${name}-${numB}`, name, length, amount }
  }
  return newSquared
};
const getRow = (length, squared) => {
  const row = Math.floor(Math.random() * (10 - 0)) + 0;
  const rowIndexes = [];
  const rowsH = [];
  for(let i = 0; i < 10; i++) {
    if (!squared[row][i]) {
      rowIndexes.push(i)
    }
  }
  if (rowIndexes.length >= length) {
    for (let i = 0; i < length; i++) {
      rowsH.push(rowIndexes[i]);
    }
    return { row, rowsH }
  } else {
    return getRow(length, squared);
  }
};
const getColum = (length, squared) => {
  const colum = Math.floor(Math.random() * (10 - 0)) + 0;
  const squaredIndexes = [];
  const rowsH = [];
  for(let i = 0; i < 10; i++) {
    if (!squared[i][colum]) {
      squaredIndexes.push(i)
    }
  }
  if (squaredIndexes[0] + 1 === squaredIndexes[1]) {
    for (let i = 0; i < length; i++) {
      rowsH.push(squaredIndexes[i]);
    }
    return { colum, rowsH }
  } else {
    return getColum(length, squared);
  }
};
const getPositionShip = (squared, ship) => {
  const { name, amount, length } = ship;
  let positionSquared = [...squared];
  for (let i = 0; i < amount; i += 1) {
    const chooseVOrH = Math.floor(Math.random() * (2 - 0)) + 0;
    if (chooseVOrH === 0) {
      const { row, rowsH } = getRow(length, positionSquared);
      positionSquared = getShipH(positionSquared, row, rowsH, name, i, length, amount);
    } else {
      const { colum, rowsH } = getColum(length, positionSquared);
      positionSquared = getShipV(positionSquared, rowsH, colum, name, i, length, amount);
    }
  }
  return positionSquared;
};
const handlePositionShips = () => {
  let squared = [];
  const ships = [
    { name: '4B', amount: 1, length: 4 },
    { name: '3B', amount: 2, length: 3 },
    { name: '2B', amount: 3, length: 2 },
    { name: '1B', amount: 4, length: 1 },
  ];
  for (let i = 0; i < 10; i++) {
    const newArr = [];
    newArr.push('', '', '', '', '', '', '', '', '', '')
    squared[i] = newArr;
  }
  ships.forEach((ship) => {
    squared = getPositionShip(squared, ship);
  })
  return squared;
};

export default handlePositionShips;
