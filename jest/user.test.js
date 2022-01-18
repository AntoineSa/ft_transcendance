const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

describe('user tests', () => {

  test('user get', () => {
    return fetch('http://backend/user/').then(data => {
      expect(data.status).toBe(200);
    });
  });
});
