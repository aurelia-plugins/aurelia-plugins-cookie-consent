'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CookieConsent = exports.Config = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

exports.configure = configure;

var _aureliaCookies = require('aurelia-cookies');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = exports.Config = function () {
  function Config() {
    _classCallCheck(this, Config);

    this._config = { cookie: {} };
  }

  Config.prototype.get = function get(key) {
    return this._config[key];
  };

  Config.prototype.options = function options(obj) {
    Object.assign(this._config, obj);
  };

  Config.prototype.set = function set(key, value) {
    this._config[key] = value;
    return this._config[key];
  };

  return Config;
}();

var CookieConsent = exports.CookieConsent = (_dec = (0, _aureliaTemplating.customElement)('cookie-consent'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, Config), _dec(_class = _dec2(_class = (_class2 = function () {
  function CookieConsent(element, config) {
    _classCallCheck(this, CookieConsent);

    _initDefineProp(this, 'button', _descriptor, this);

    _initDefineProp(this, 'message', _descriptor2, this);

    this.show = false;

    this._element = element;
    this._config = config;

    this.show = !_aureliaCookies.Cookies.get('aurelia-cookie-consent');
  }

  CookieConsent.prototype.dismiss = function dismiss() {
    _aureliaCookies.Cookies.put('aurelia-cookie-consent', true, this._config.get('cookie'));
    this.show = false;
  };

  return CookieConsent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'button', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'Got it!';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'message', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'This website uses cookies to ensure you get the best experience on our website.';
  }
})), _class2)) || _class) || _class);
function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources('./aurelia-cookie-consent-element');
}