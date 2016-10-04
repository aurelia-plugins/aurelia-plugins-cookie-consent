import {
  Cookies
} from 'aurelia-cookies';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  bindable,
  customElement
} from 'aurelia-templating';

// PUBLIC CLASS
export declare class Config {
  
  // CONSTRUCTOR
  constructor();
  
  // PUBLIC METHODS
  get(key?: any): any;
  options(obj?: any): any;
  set(key?: any, value?: any): any;
}

// PUBLIC CLASS

// IMPORTS
// CLASS ATTRIBUTES
export declare class CookieConsent {
  button: any;
  message: any;
  show: any;
  
  // CONSTRUCTOR
  constructor(element?: any, config?: any);
  
  // PUBLIC METHODS
  dismiss(): any;
}

// IMPORTS
// PUBLIC METHODS
export declare function configure(aurelia?: any, configCallback?: any): any;