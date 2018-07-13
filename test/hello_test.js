const chai = require('chai');
const should = chai.should();
const hello = require('../src/hello');

describe('hello.js', () => {
  context('echo', () => {
    it('should return Hello world when the value is world', () => {
      hello('world').should.equal('Hello world');
    });
  });
});