define(['exports', './aurelia-plugins-cookie-consent-config'], function (exports, _aureliaPluginsCookieConsentConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(_aureliaPluginsCookieConsentConfig.Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-plugins-cookie-consent-element');
  }
});