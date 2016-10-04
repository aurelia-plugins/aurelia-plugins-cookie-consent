
import { Config } from './aurelia-cookie-consent-config';

export function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources('./aurelia-cookie-consent-element');
}