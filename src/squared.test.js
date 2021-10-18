import {
  getShipH,
  // getShipV,
  // getColum,
  // getRow,
  // getPositionShip,
  // handlePositionShips,
} from './squared';

const squared = [
  ['', '', ''],
  ['', '', ''],
];
const row = 0;
const rowH = [0, 2];
const name = '2B';
const numB = 2;
const length = 2;
const amount = 1;

describe('squared', () => {
  test('the path is not validate', () => {
    getShipH(squared, row, rowH, name, numB, length, amount).toEqual();
  });

  test('the path is not file .md', () => {

  });

  test('should return a set of objects of file', () => {

  });

  test('should return a set of obj of dir', () => {

  });

  test('should return a set empty', () => {

  });

  test('should return a set of objects of file and opt-val', () => {

  });

  test('should return a set of obj of dir and opt-val', () => {

  });
});
