import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {

  this.route('devices', { path: '/devices'});
  this.route('device', { path: '/device/:device_id' });
  this.route('console', { path: '/'});
  this.route('console', { path: '/console'});

});

export default Router;
