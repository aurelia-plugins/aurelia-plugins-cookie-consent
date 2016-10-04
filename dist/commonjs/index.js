'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aureliaCookieConsent = require('./aurelia-cookie-consent');

Object.keys(_aureliaCookieConsent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaCookieConsent[key];
    }
  });
});