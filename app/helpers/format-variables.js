import Ember from 'ember';

export function formatVariables(params/*, hash*/) {
  return JSON.stringify(params[0]);
}

export default Ember.Helper.helper(formatVariables);
