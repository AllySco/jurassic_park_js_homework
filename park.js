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
    for (i = this.enclosure.length - 1; i >= 0; i--) {
      if (this.enclosure[i].type === type) {
        this.enclosure.splice(i, 1);
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
      return lotsOfKids;
  }
}


module.exports = Park;