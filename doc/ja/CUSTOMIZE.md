# 独自のPromise/A+実装の使用方法

chromiseはPromise/A+実装に依存しますが、特定の実装には依存せず、
任意の実装と組み合わせることが出来ます。

chromise APIは組み合わせたPromise/A+実装の種類に関わらず`chromise`というオブジェクトを提供しますが、
これは`Chromise`クラスのインスタンスです。
Chromiseクラスのコンストラクタは2つの引数deferredとpromiseを取ります。

* deferred: 引数を取らず、初期化されたDeferredオブジェクトを返す関数
* promise: 引数としてDeferredオブジェクトを1つ取り、Promiseオブジェクトを返す関数

Promise/A+の実装としてjQueryを利用するchormiseオブジェクトは次のように生成されています。

```javascript
let $ = require('jquery'),
    Chromise = require('./Chromise');

module.exports = new Chromise($.Deferred.bind($), d => d.promise());
```

このように、各Promise/A+の実装に非常に簡単に対応することが出来ます。

公式には2016/05/04現在、2種類のPromise/A+の実装に対応したchromise APIを提供しています。

* chromise-jquery
* chromise-mithril
