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
  },

  getOpyOver2: function() {
    var lotsOfKids = [];
    for (var dinosaur of this.enclosure) {
      if (dinosaur.opy > 2) {
        lotsOfKids.push(dinosaur)
      }
    }
      return lotsOfKids.length;
  }
}


module.exports = Park;