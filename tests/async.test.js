import { fetchData, getUser } from '../src/async.js';

describe('fetchData function', () => {
  test('async test', async () => {
    const data = await fetchData();
  expect(data).toEqual({id: 23, clientName: 'John Smith'});
  expect(data).toHaveProperty('id', 23);
  });
});

describe('getUser function', () => {

  beforeEach(async() => {
    jest.spyOn(await import('../src/async.js'), 'fetchData').mockResolvedValue({id: 23, clientName: 'John Smith'});
  })

  test('return incorrect user data', async () => {
    const user = await getUser(12345);
expect(user).toBeNull();
  });
});

describe('getUser function', () => {
  test('return correct user data', async () => {
    const user = await getUser(23);
expect(user).toEqual({id: 23, clientName: 'John Smith'});
  });
});