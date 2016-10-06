import {Cookies} from 'aurelia-cookies';
import {inject} from 'aurelia-dependency-injection';
import {bindable,customElement} from 'aurelia-templating';

// PUBLIC CLASS
export class Config {
  // PRIVATE PROPERTIES
  _config;

  // CONSTRUCTOR
  constructor() {
    this._config = { cookie: {} };
  }

  // PUBLIC METHODS
  get(key) {
    return this._config[key];
  }

  options(obj) {
    Object.assign(this._config, obj);
  }

  set(key, value) {
    this._config[key] = value;
    return this._config[key];
  }
}

// IMPORTS
// CLASS ATTRIBUTES
@customElement('cookie-consent')
@inject(Element, Config)


// PUBLIC CLASS
export class CookieConsent {
  // PRIVATE PROPERTIES
  _config;
  _element;

  // PUBLIC PROPERTIES
  @bindable button = 'Got it!';
  @bindable message = 'This website uses cookies to ensure you get the best experience on our website.';
  show = false;

  // CONSTRUCTOR
  constructor(element, config) {
    this._element = element;
    this._config = config;

    this.show = !Cookies.get('aurelia-cookie-consent');
  }

  // PUBLIC METHODS
  dismiss() {
    Cookies.put('aurelia-cookie-consent', true, this._config.get('cookie'));
    this.show = false;
  }
}

// IMPORTS
// PUBLIC METHODS
export function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof(configCallback) === 'function')
    configCallback(instance);
  aurelia.globalResources('./aurelia-cookie-consent-element');
}
