define(['exports', './aurelia-cookie-consent-config'], function (exports, _aureliaCookieConsentConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(_aureliaCookieConsentConfig.Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-cookie-consent-element');
  }
});