# MediaQueryList.prototype.addEventListener Polyfill

`MediaQueryList.prototype.addListener` and `MediaQueryList.prototype.removeListener` is deprecated and no longer recommended.

Instead, the standard supports it as same mechanism as `EventTarget.addEventListener`.

But [`MediaQueryList.prototype.addEventListener` is supported since Safari 14](https://caniuse.com/mdn-api_mediaquerylist), So we may still need polyfill to follow the standard :/

## Usage (via NPM)

```bash
yarn add mediaquerylist.addeventlistener
```

then import it from your entry script file.

```js
import 'mediaquerylist.addeventlistener/polyfill';
```

## Usage (via unpkg)

```html
<script src="https://unpkg.com/mediaquerylist.addeventlistener@1.0.0/polyfill.js"></script>
```

## LICENSE

MIT
