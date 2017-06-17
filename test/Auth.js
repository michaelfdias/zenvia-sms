const assert = require('assert');
const Auth = require('../lib/Auth');

describe('Auth', function() {
  describe('constructor()', function() {
    it('Should set _user and _password when the object is created', function() {
      const user = 'foo';
      const pass = 'bar';
      const auth = new Auth(user, pass);
      assert.equal(auth._user, user);
      assert.equal(auth._password, pass);
    });
  });

  describe('_basicAuth()', function() {
    it('Should return the base64 of _user:_password', function() {
      const user = 'foo';
      const pass = 'bar';
      const auth = new Auth(user, pass);
      assert.equal(auth._basicAuth(), 'Zm9vOmJhcg==');
    });
  });

  describe('headers()', function() {
    it('Should return the object of Basic Authentication header', function() {
      const user = 'foo';
      const pass = 'bar';
      const auth = new Auth(user, pass);
      assert.deepEqual(auth.headers(), {
        Authorization: 'Zm9vOmJhcg=='
      });
    });
  });
});
