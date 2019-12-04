## React HOOKS Examaple

https://qiita.com/rana_kualu/items/915345b8f3f870cfe2aa

上記の記事に影響されたのでその第一回目。

そのまま Movie だとただのコピペになるので取得は Qiita の記事にして aync/await に置き換えたりなどした。

- https://qiita.com/api/v2/docs#get-apiv2items
- https://help.qiita.com/ja/articles/qiita-search-options

Qiita の API についてはこのあたりに書いてある。

### 学んだこと

- `useEffect` について https://ja.reactjs.org/docs/hooks-effect.html
- `useEffect` での非同期処理

### ハマったこと

`.env` が読み込まれなくて困った。 

https://create-react-app.dev/docs/adding-custom-environment-variables/

ドキュメントに書いてある。

### あとで後悔したこと

`create-app-react` で TS を使う場合、`npx create-react-app my-app --typescript` とするらしい。TS で書きたかった。
