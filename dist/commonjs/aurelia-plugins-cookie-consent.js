'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

var _aureliaPluginsCookieConsentConfig = require('./aurelia-plugins-cookie-consent-config');

function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(_aureliaPluginsCookieConsentConfig.Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources(_aureliaPal.PLATFORM.moduleName('./aurelia-plugins-cookie-consent-element'));
}