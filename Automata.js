automataList = [];

function Automata(s, a, d, col) {
  this.colour = col;
  this.speed = s;
  this.attack = a;
  this.defence = d;
}

Automata.prototype = {
  constructor: Automata,

  getColour: function() {
    return this.colour;
  },

  setColour: function(col) {
    this.colour = col;
  },

  getSpeed: function() {
    return this.speed;
  },

  setSpeed: function(spd) {
    this.speed = spd;
  },

  getAttack: function() {
    return this.attack;
  },

  setAttack: function(atk) {
    this.attack = atk;
  },

  getDefence: function() {
    return this.defence;
  },

  setDefence: function(dfc) {
    this.defence = dfc;
  }


}