'use strict';

function Thermostat(){
  this.temperature = 20;
  this.MIN_TEMPERATURE = 10;
};

Thermostat.prototype.increase = function() {
  this.temperature ++;
};

Thermostat.prototype.decrease = function() {
  if(this.temperature < (this.MIN_TEMPERATURE + 1)) {
    return 'cannot exceed minimum temperature';
  } else {
    this.temperature --;
  };
};