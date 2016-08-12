import DS from 'ember-data';

export default DS.RESTSerializer.extend({


  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    var type = Ember.Inflector.inflector.pluralize(primaryModelClass.modelName);

    return this._super(store, primaryModelClass,
      {[`${type}`]: payload}, id, requestType);

  }

});
