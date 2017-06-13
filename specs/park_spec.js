var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');
var assert = require('assert');


describe('Park', function (){

  var park;
  var dinosaur1;
  var dinosaur2;
  var dinosaur3;

  beforeEach(function() {
    park = new Park();
    dinosaur1 = new Dinosaur("Stegosaurus", 6);
    dinosaur2 = new Dinosaur("T-rex", 2);
    dinosaur3 = new Dinosaur("Diplodocus", 4);
  })

  it("enclosure should start empty", function() {
    assert.strictEqual(0, park.enclosure.length);
  })

  it("can add dinosaur", function() {
    park.addDino(dinosaur3);
    assert.strictEqual(1, park.enclosure.length);
  })

  it("can empty park", function() {
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.emptyEnclosure();
    assert.strictEqual(0, park.enclosure.length);
  })

  it("can remove dinosaur by type", function() {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    park.removeDino(dinosaur2.type);
    assert.strictEqual(3, park.enclosure.length);
  })




  
})