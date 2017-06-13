var Park = function() {
  this.enclosure = [];
}

Park.prototype = {
  emptyEnclosure: function() {
    this.enclosure = [];
  }
}


module.exports = Park;