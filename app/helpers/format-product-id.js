import Ember from 'ember';

export function formatProductId(params/*, hash*/) {
  var products = {
    '6': 'Photon'
  }
  return products[params[0]];
}

export default Ember.Helper.helper(formatProductId);
