const assert = require('assert');
const Response = require('../lib/Response');

describe('Response', function() {
  describe('constructor()', function() {
    it('Should set the _header and _body property', function() {
      const header = { "Content-Type": "application/json" };
      const body = { success: true };
      const response = new Response(header, body);
      assert.equal(response._header, header);
      assert.equal(response._body, body);
    });
  });

  describe('header()', function() {
    it('Should return the _header property defined by constructor', function() {
      const header = { "Content-Type": "application/json" };
      const body = { success: true };
      const response = new Response(header, body);
      assert.equal(response.header(), header);
    });
  });

  describe('body()', function() {
    it('Should return the _body property defined by constructor', function() {
      const header = { "Content-Type": "application/json" };
      const body = { success: true };
      const response = new Response(header, body);
      assert.equal(response.body(), body);
    });
  });
});
