import Ember from 'ember';

export default Ember.Service.extend({

  token: 'd6576383889e1526c95853391923584b508071c4',

  init()  {
    this.particle = new Particle();
  },

  listDevices() {
    return this.particle.listDevices({ auth: this.token });
  },

  deviceDetails(deviceID) {
    return this.particle.getDevice({ deviceId: deviceID, auth: this.token });
  },

  executeFunction(functionName, deviceID) {
    return this.particle.callFunction({ deviceId: deviceID, name: functionName, argument: 'D0:HIGH', auth: this.token });
  },

  getVariable(variableName, deviceID) {
    return this.particle.getVariable({ deviceId: deviceID, name: variableName, auth: this.token })
  }


});
