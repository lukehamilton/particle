import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr(),
  last_heard: DS.attr(),
  product_id: DS.attr()

});
