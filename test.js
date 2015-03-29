var should = require('should');
var Distance = require('./dist/index.js');

describe('Distance checking', function () {
  var distance = new Distance();
  it('should account for substitutions', function () {
    (distance.calculate('hello', 'moose')).should.be.exactly(5);
  });

  it('should account for insertions', function() {
    (distance.calculate('hello', 'hellloo')).should.be.exactly(2);
  });

  it('should account for transposition', function() {
    (distance.calculate('apple', 'appel')).should.be.exactly(1);
  });

  it('should account for deletions', function() {
    (distance.calculate('apple', 'appl')).should.be.exactly(1);
  });

  it('should account for everything combined', function() {
    (distance.calculate('hello world', 'elol worrlm')).should.be.exactly(4);
  })
});

describe('Custom weights', function() {
  var distance = new Distance({
    substitution: 2,
    insertion: 3,
    transposition: 1,
    deletion: 7
  });
  it('should be able to change the substitution weight', function() {
    (distance.calculate('hello', 'moose')).should.be.exactly(10);
  });

  it('should be able to change the insertion weight', function() {
    (distance.calculate('hello', 'hellloo')).should.be.exactly(6);
  });

  it('should be able to change the transposition weight', function() {
    (distance.calculate('apple', 'appel')).should.be.exactly(1);
  });

  it('should be able to change the deletion weight', function() {
    (distance.calculate('apple', 'appl')).should.be.exactly(7);
  });

});