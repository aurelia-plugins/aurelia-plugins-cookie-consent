'use strict';

System.register(['./aurelia-cookie-consent-config'], function (_export, _context) {
  "use strict";

  var Config;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources('./aurelia-cookie-consent-element');
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaCookieConsentConfig) {
      Config = _aureliaCookieConsentConfig.Config;
    }],
    execute: function () {}
  };
});