define(['exports', './aurelia-cookie-consent'], function (exports, _aureliaCookieConsent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaCookieConsent).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaCookieConsent[key];
      }
    });
  });
});