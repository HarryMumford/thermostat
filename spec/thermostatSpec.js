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

    it('minimum temperature',function() {
      expect(thermostat.MIN_TEMPERATURE).toEqual(10);
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

  describe('if minimum temperature is exceeded',function() {

    beforeEach(function() {
      var i;
      for (i = 0; i < thermostat.MIN_TEMPERATURE; i++) {
        thermostat.decrease();
      }
    });

    it('raises error',function() {
      expect(thermostat.decrease()).toEqual('cannot exceed minimum temperature');
    });

    it('remains at minimum temperature',function() {
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(10);
    });
  });
});