'use strict';

exports.__esModule = true;
exports.configure = configure;

var _aureliaPluginsCookieConsentConfig = require('./aurelia-plugins-cookie-consent-config');

function configure(aurelia, configCallback) {
  const instance = aurelia.container.get(_aureliaPluginsCookieConsentConfig.Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources('./aurelia-plugins-cookie-consent-element');
}