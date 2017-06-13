var Park = function() {
  this.enclosure = [];
}

Park.prototype = {

  emptyEnclosure: function() {
    this.enclosure = [];
  },

  addDino: function(dinosaur) {
    this.enclosure.push(dinosaur);
  }
  
}


module.exports = Park;