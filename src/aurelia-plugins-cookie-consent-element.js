// IMPORTS
import {Cookies} from 'aurelia-plugins-cookies';
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';

import {Config} from './aurelia-plugins-cookie-consent-config';


// CLASS ATTRIBUTES
@customElement('aup-cookie-consent')
@inject(Element, Config)


// PUBLIC CLASS
export class CookieConsent {
  // PRIVATE PROPERTIES (DI)
  config;
  element;

  // BINDABLE PROPERTIES
  @bindable button = 'Got it!';
  @bindable message = 'This website uses cookies to ensure you get the best experience on our website.';

  // PUBLIC PROPERTIES
  show = false;

  // CONSTRUCTOR
  constructor(element, config) {
    this.config = config;
    this.element = element;
    this.show = !Cookies.get('aurelia-plugins-cookie-consent');
  }

  // PUBLIC METHODS
  dismiss() {
    Cookies.put('aurelia-plugins-cookie-consent', true, this.config.get('cookie'));
    this.show = false;
  }
}