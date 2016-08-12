import Ember from 'ember';

export default Ember.Route.extend({

  particleService: Ember.inject.service('particle'),

  actions: {
    didTransition: function() {
      var route = this;
      // Element does not exist.
      Ember.run.scheduleOnce('afterRender', this, function() {
        this.setupTerminal();
        this.setupParticleSDK();
      });
    }
  },

  commands: {

    help: function(args) {
        return "<p>Welcome to the <span style=\"color: #0f0; font-weight: bold\">Geekonaut</span> terminal</p>" +
               "<p>Here is what you can do:</p>" +
               "<ul>" +
               "<li><strong>devices</strong> - lists the available devices</li>" +
               "<li><strong>details DEVICE_ID</strong> - lists the details of a device</li>" +
               "<li><strong>functions DEVICE_ID</strong> - lists the functions a device can execute</li>" +
               "<li><strong>execute FUNCTION DEVICE_ID</strong> - execute a function on a device and returns a value</li>" +
               "<li><strong>variables DEVICE_ID</strong> - lists the variables a device stores</li>" +
               "<li><strong>value VARIABLE DEVICE_ID</strong> - retrieves the value of a variable stored on a device</li>" +
               "</ul><p>Pro tip: There's a telnet listening on 2342, too. :)</p>";
    },

    clear: function(args) {
      // TODO
    },

    ls: function(args)  {
      var output;
      if (args.length < 2)  {
        output = "<p>Please pass an argument.</p>"
      } else if (args.length == 2) {
        var arg = args[1];
        console.log('arg', arg);
      } else  {
        output = "<p>To many arguments.</p>" +
                "<p>'ls' only takes 1.</p>";
      }
      return output
    },

    devices: function(args) {
      var promise = particleService.listDevices();
      promise.then(function(data)  {
        var terminal = document.getElementById("terminal");
        var devices = data.body;
        var output = '';
        for (var i = 0; i < devices.length; i++)  {
          output += '<p class="cyan">' + devices[i].id + '</p>';
        }
        terminal.innerHTML += output
        resetPromptOverride();
      })
      return null
    },


    details: function(args) {
      console.log('details', args);
      var deviceID = args[1];
      // var deviceID = '2a002c000a47343232363230'
      var promise = particleService.deviceDetails(deviceID);
      promise.then(function(data)  {
        var terminal = document.getElementById("terminal");
        var details = data.body;
        var output = '';
        console.log('details', details);
        for (var key in details)  {
          if (typeof(details[key]) == 'object') {
            output += '<p><span class="cyan">' + key + ':</span> ' + JSON.stringify(details[key]) + '</p>';
          } else {
            output += '<p><span class="cyan">' + key + ':</span> ' + details[key] + '</p>';
          }
        }
        terminal.innerHTML += output
        resetPromptOverride();
      })
      return null
    },

    functions: function(args) {
      console.log('details', args);
      var deviceID = args[1];
      var promise = particleService.deviceDetails(deviceID);
      promise.then(function(data)  {
        var terminal = document.getElementById("terminal");
        var functions = data.body.functions;
        var output = '';
        for (var i = 0; i < functions.length; i++)  {
          output += '<p class="cyan">' + functions[i] + '</p>';
        }
        terminal.innerHTML += output
        resetPromptOverride();
      })
      return null
    },

    execute: function(args) {
      var functionName = args[1];
      var deviceID = args[2];
      var promise = particleService.executeFunction(functionName, deviceID);
      promise.then(function(data)  {
        var terminal = document.getElementById("terminal");
        var returnValue = data.body.return_value;
        var output = '<p class="cyan">' + returnValue + '</p>';
        terminal.innerHTML += output
        resetPromptOverride();
      })
      return null
    },

    variables: function(args) {
      console.log('details', args);
      var deviceID = args[1];
      var promise = particleService.deviceDetails(deviceID);
      promise.then(function(data)  {
        var terminal = document.getElementById("terminal");
        var variables = Object.keys(data.body.variables);
        var output = '';
        for (var i = 0; i < variables.length; i++)  {
          output += '<p class="cyan">' + variables[i] + '</p>';
        }
        terminal.innerHTML += output
        resetPromptOverride();
      })
      return null
    },

    value: function(args) {
      var variableName = args[1];
      var deviceID = args[2];
      var promise = particleService.getVariable(variableName, deviceID);
      promise.then(function(data)  {
        var terminal = document.getElementById("terminal");
        console.log('data', data);
        // var returnValue = data.body.return_value;
        // var output = '<p class="cyan">' + returnValue + '</p>';
        // terminal.innerHTML += output
        resetPromptOverride();
      })
      return null
    }




  },

  setupTerminal() {
    Terminal.init(document.getElementById("terminal"), this.commands)
  },

  setupParticleSDK()  {
    window.particleService = this.get('particleService');
  }

});
