'use strict';

describe('Thermostat',function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
    console.log(thermostat)
  });
  
  describe('it knows its',function() {
    it('starting temperature',function() {
      expect(thermostat.temperature()).toEqual(20);
    });
  });

});