import { filterHouse } from '../src/data.js';

const dataHouse = [{
  'name': 'Harry Potter',
  'house': 'Gryffindor'},
  {'name': 'Harry Potter',
  'house': 'Gryffindor'},]

describe('filterHouse', () => {
  test('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  test('should return "Gryffindor" for filter "house"', () => {
    expect(filterHouse(dataHouse, "Gryffindor")).toEqual(dataHouse);
  });
});

