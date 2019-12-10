'use strict';

describe('Thermostat',function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });
  
  describe('it knows its',function() {
    it('starting temperature',function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('it alters its temperature by',function() {
    it('increasing',function() {
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it('decreasing',function() {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });
  });
});