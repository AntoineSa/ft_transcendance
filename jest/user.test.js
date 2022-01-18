const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

describe('user tests', () => {

  function testUserPost(body, return_code) {

    return fetch('http://backend/user/', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'} 
    })
    .then(data => {
      expect(data.status).toEqual(return_code);
    });
  }

  test('user get', () => {
    return fetch('http://backend/user/').then(data => {
      expect(data.status).toBe(200);
    });
  });

  test('user valid post', () => {

    const body = {
      username: "user1",
      password: "password"
    };

    return testUserPost(body, 201);
  });

  test('user empty username post', () => {

    const body = {
      username: "",
      password: "password"
    };

    return testUserPost(body, 400);
  });

  test('user long username post', () => {

    const body = {
      username: "zzzzzzzzzzzzzzzzzzzzz",
      password: "password"
    };

    return testUserPost(body, 400);
  });

  test('user empty password post', () => {

    const body = {
      username: "user2",
      password: ""
    };

    return testUserPost(body, 400);
  });

  test('user empty post', () => {

    const body = {};

    return testUserPost(body, 400);
  });

  test('user unknown attribute post', () => {

    const body = {
      username: "user2",
      password: "password",
      unkown: "some string"
    };
    return testUserPost(body, 201);
  });

});
