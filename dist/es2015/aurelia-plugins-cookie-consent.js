
import { Config } from './aurelia-plugins-cookie-consent-config';

export function configure(aurelia, configCallback) {
  const instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources('./aurelia-plugins-cookie-consent-element');
}