var Park = function() {
  this.enclosure = [];
}

Park.prototype = {

  emptyEnclosure: function() {
    this.enclosure = [];
  },

  addDino: function(dinosaur) {
    this.enclosure.push(dinosaur);
  },

  removeDino: function(type) {
    for (var dinosaur of this.enclosure) {
      if (dinosaur.type === type) {
        var index = this.enclosure.indexOf(dinosaur);
        this.enclosure.splice(index, 1);
      }
    }
  }

}


module.exports = Park;