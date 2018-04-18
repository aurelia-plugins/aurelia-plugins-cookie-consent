'use strict';

System.register(['aurelia-pal', './aurelia-plugins-cookie-consent-config'], function (_export, _context) {
  "use strict";

  var PLATFORM, Config;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources([PLATFORM.moduleName('./aurelia-plugins-cookie-consent-element')]);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaPluginsCookieConsentConfig) {
      Config = _aureliaPluginsCookieConsentConfig.Config;
    }],
    execute: function () {}
  };
});