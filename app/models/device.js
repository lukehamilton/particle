import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr(),
  last_heard: DS.attr(),
  product_id: DS.attr(),
  last_ip_address: DS.attr(),
  cellular: DS.attr(),
  variables: DS.attr(),
  functions: DS.attr(),
  connected: DS.attr()

});
