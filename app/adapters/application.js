import DS from 'ember-data';

// export default DS.JSONAPIAdapter.extend({
// });

export default DS.RESTAdapter.extend({

  host: 'https://api.particle.io/v1',

  headers: {
    "Authorization": " Bearer d6576383889e1526c95853391923584b508071c4"
  },


});
