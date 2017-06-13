var Dinosaur = require('../dinosaur.js');
var assert = require('assert');

describe('Dinosaur', function (){

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Stegosaurus", 4);
    dinosaur2 = new Dinosaur("T-rex", 1);
    dinosaur3 = new Dinosaur("Diplodocus", 2);
  })

  it("should get type", function(){
    assert.strictEqual("Stegosaurus", dinosaur1.type);
  })

  it("should get offspring per year", function() {
    assert.strictEqual(1, dinosaur2.opy);
  })

})