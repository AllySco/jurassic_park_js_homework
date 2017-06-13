var Dinosaur = require('../dinosaur.js');
var assert = require('assert');


describe('Dinosaur', function (){

  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function() {
    dinosaur1 = new Dinosaur("Stegosaurus", 6);
    dinosaur2 = new Dinosaur("T-rex", 2);
    dinosaur3 = new Dinosaur("Diplodocus", 4);
  })

  it("should get type", function(){
    assert.strictEqual("Stegosaurus", dinosaur1.type);
  })





})