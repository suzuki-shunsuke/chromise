## インストール

chromiseは以下の方法でインストール出来ます。

* Bower
* npm

### Bower

```
$ bower install --save chromise
```

chormiseは外部のPromise/A+の実装に依存します。
jQueryを用いる場合、

```html
<script src="jquery.min.js"></script>
<script src="chromise.jquery.js"></script>
```

### npm

Webpackなどを用いてnodeモジュールとして組み込むことも出来ます。

```
$ npm install --save chromise-core
```

```javascript
let chromise = require('chromise-jquery');
```
