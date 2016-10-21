define(['exports', './aurelia-plugins-cookie-consent'], function (exports, _aureliaPluginsCookieConsent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaPluginsCookieConsent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaPluginsCookieConsent[key];
      }
    });
  });
});