# aurelia-plugins-cookie-consent

A Cookie Consent plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-cookie-consent --save
```

When using Aurelia CLI add the following dependency to `aurelia.json` as described in the [documentation](http://aurelia.io/docs/build-systems/aurelia-cli#adding-client-libraries-to-your-project):

```json
{
  "name": "aurelia-plugins-cookie-consent",
  "path": "../node_modules/aurelia-plugins-cookie-consent/dist/amd",
  "main": "aurelia-plugins-cookie-consent"
}
```

Add `node_modules/babel-polyfill/dist/polyfill.min.js` to the prepend list in `aurelia.json`. Do not forgot to add `babel-polyfill` to the dependencies in `package.json`.

For projects using Webpack, please add `babel-polyfill` to your `webpack.config.js` as documented by [babeljs.io](https://babeljs.io/docs/usage/polyfill/#usage-in-node--browserify--webpack).

**JSPM**

```shell
jspm install aurelia-plugins-cookie-consent
```

**Bower**

```shell
bower install aurelia-plugins-cookie-consent
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
import {PLATFORM} from 'aurelia-framework';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin(PLATFORM.moduleName('aurelia-plugins-cookie-consent'), config => {
      config.options({
        cookie: { domain: '.site.com', path: '/' }, // your typical cookie settings like domain, expires, path and secure
      });
    });

  await aurelia.start();
  aurelia.setRoot('app');
}
```

## Usage

Once Cookie Consent is configured, to use it simply add the custom element `<aup-cookie-consent></aup-cookie-consent>` in your view.

### Change the text

To change the text, simply add the attributes `button` and `message`.

```html
<aup-cookie-consent button="button-text" message="message-text"></aup-cookie-consent>
```

If you're using `aurelia-i18n`, you can use the tValueConverter to translate the different texts.

```html
<aup-cookie-consent button="${ 'button-text' & t }" message="${ 'message-text' & t }"></aup-cookie-consent>
```

## Styling

The notifier doesn't come with styling. If you use the CSS Framework [`Faceman`](<http://faceman.io>), styling is provided automatically. Otherwise copy and paste the below styling to your SCSS stylesheet. Use the variables to change the look-and-feel.

```scss
$cookie-consent-background: #34495e !default;
$cookie-consent-border-radius: 4px !default;
$cookie-consent-color: #ffffff !default;
$cookie-consent-padding: 32px !default;
$cookie-consent-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19) !default;
$cookie-consent-text-align: center !default;

.cookie-consent {
  background: $cookie-consent-background; border-radius: $cookie-consent-border-radius; color: $cookie-consent-color;
  overflow: auto; padding: $cookie-consent-padding; box-shadow: $cookie-consent-shadow; text-align: $cookie-consent-text-align;
}
.cookie-consent button { width: 100%; }
.cookie-consent p { margin-bottom: 16px; }
```