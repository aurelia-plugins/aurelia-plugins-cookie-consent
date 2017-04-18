# aurelia-plugins-cookie-consent

A Cookie Consent plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-cookie-consent --save
```

**JSPM**

```shell
jspm install aurelia-plugins-cookie-consent
```

**Bower**

```shell
bower install aurelia-plugins-cookie-consent
```

## Configuration

Add to `package.json`

```json
  "aurelia": {
    "build": {
      "resources": [
        "aurelia-plugins-cookie-consent"
      ]
    }
  }
```

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-cookie-consent', config => {
      config.options({
        cookie: { domain: 'mydomain', path: '/' }, // your typical cookie settings like domain, expires, path and secure
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