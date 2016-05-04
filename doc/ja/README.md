# chromise - Chrome拡張のJavaScript APIをPromise/A+仕様にするラッパー

## このページについて

このページはChrome拡張の開発者向けに
chromiseの概要と手軽な導入方法を説明するためのものです。
詳細な説明は別のページに譲ります。

## chromise とは?

[Chrome拡張のJavaScript API](https://developer.chrome.com/extensions/api_index)(以下 Chrome API)を[Promise/A+](https://promisesaplus.com/)仕様にするラッパーです。
Chrome APIの多くは非同期関数で、コールバック関数を引数に取ります。
そのため、次のサンプルコードのように容易にコールバック地獄が起こります。

```javascript
chrome.storage.local.set({'a': 'a'}, () => {
  chrome.storage.local.get(['a', 'b'], items => {
    chrome.tabs.create(tab => {
      chrome.storage.local.clear(() => {
        // ...
      });
    });
  });
});
```

そこでchromiseはChrome APIのインタフェースをコールバック関数ではなくPromise/A+形式にしたラッパーを提供します。
chromiseを使えば上記のサンプルコードを手続き的に書き換えることができます。

```javascript
chromise.storage.local.set({'a': 'a'})
.then(() => {
  return chromise.storage.local.get(['a', 'b']);
.then(items => {
  return chromise.tabs.create();
.then(tab => {
  return chromise.storage.local.clear();
then(() => {
  // ...
});
```

## インストール

幾つか方法がありますが、手軽に[Bower](http://bower.io/)を使う方法を紹介します。
また、chormiseはPromise/A+実装を提供しないので、
ここではPromise/A+実装としてjQueryを利用します(jQuery以外の実装も使えます)。

```
$ bower install --save chromise
```

```html
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/chromise/dist/chromise.jquery.js"></script>
```

他のインストール方法は[こちら](INSTALL)を参照。

## 注意: chromise が提供しないもの

### Chrome APIのプロパティやコールバック関数を取らないAPIのラッパ

chromise APIはChrome APIのプロパティやコールバック関数を取らないAPIのラッパを提供しません。
例えば chromise.runtime APIは[chrome.runtime.lastError](https://developer.chrome.com/extensions/runtime#property-lastError)や[chrome.runtime.getManifest](https://developer.chrome.com/extensions/runtime#method-getManifest)に相当する
chromise.runtime.lastErrorやchromise.runtime.getManifestを提供しません。

### Promise/A+の実装

chromise APIはPromise/A+の実装を提供しません。
chromise APIは外部のPromise/A+の実装に依存します。

Promise/A+の実装としては[jQueryのDeferredオブジェクト](https://api.jquery.com/category/deferred-object/)が有名ですが、
他の実装を利用することも出来ます。

詳細は[こちら](CUSTOMIZE)を参照。

## APIリファレンス

chromiseが提供するAPI(以下chromise API)のインタフェースはコールバック関数がPromise/A+形式になった以外はChrome APIと同じですので
chromise APIの引数の型などに関するドキュメントはChrome APIのドキュメントを参照してください
(例えば、chromise.tabs.removeメソッドに関するドキュメントはChrome APIの[chrome.tabs.remove](https://developer.chrome.com/extensions/tabs#method-remove)を参照してください)。

## ライセンス

[MITライセンス]()

## バグ報告について

[GitHub Issues]()によって受け付けています。

## プルリクエストについて

プルリクエストは随時受け付けています。

## コントリビュータ

[コントリビュータ]()

## chromiseのコントリビュータ向け

chromiseはコントリビュータを随時募集しています。
コントリビュータ向けのドキュメントは[こちら](DEVELOP)を参照してください。

## その他のドキュメント

* [インストール](): Bowerを使ったインストール方法や、
  Webpackを用いてnodeモジュールから組み込む方法など
* [独自のPromise/A+実装の使用方法]()
* [APIリファレンス]()
* [コントリビュータ向け]()
