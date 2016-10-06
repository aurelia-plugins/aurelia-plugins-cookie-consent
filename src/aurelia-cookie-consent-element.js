// IMPORTS
import {Cookies} from 'aurelia-cookies';
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';

import {Config} from './aurelia-cookie-consent-config';


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
