# POSSE課題 PR本文

## 提出URL

- リポジトリ: https://github.com/asahi1117/my-bookshelf （作成後に push）
- GitHub Pages: 任意。`vite.config.js` に `base: './'` 済み。公開する場合は `pnpm run deploy` のあと Pages のソースを `gh-pages` ブランチにする。

## 作ったコンポーネントの一覧と、それぞれが何を担当しているか

- `App`（`src/App.jsx`）: 書籍データの配列を持ち、`map` で `BookCard` を並べる。ページ全体の骨格。
- `Header`（`src/components/Header.jsx`）: ページタイトルと説明文。
- `BookCard`（`src/components/BookCard.jsx`）: 1冊分のカード。タイトル・著者・評価・コメントを表示する。
- `Footer`（`src/components/Footer.jsx`）: ページ下部のクレジット。

## BookCard に渡している props の名前と、その値の型

- `title`: 文字列（本の題名）
- `author`: 文字列（著者名）
- `rating`: 数値（1〜5）
- `comment`: 文字列（一言コメント）

## map で表示したとき、key に何を使ったか

`book.id` を使った。配列のインデックスは並び順の番号でしかなく、順番が変わると React が別の本を同じ要素だと取り違えることがある。データ固有の `id` なら、順番が変わっても同じ本を同じカードとして追跡できる。

## 詰まった場所とどう解決したか

1. `create vite` の前に空フォルダへ Git を初期化しようとして失敗した（Windows 側のシェル起動エラー）。フォルダ内で `git init` したあと `pnpm create vite . --template react` を実行して解決した。
2. 評価の ★ と ☆ を別々の式で改行して書いたところ、JSX が間に空白を入れて `★★★★ ☆` になった。`'★'.repeat(rating) + '☆'.repeat(5 - rating)` の1本の文字列にまとめて直した。
3. `gh` が PATH に無くコマンドとして見つからなかった。`C:\Program Files\GitHub CLI\gh.exe` を直接指定してリポジトリ作成と push を行った。

## 確認結果

### 表示確認

- スマホ幅（375px）: カードが1列。横スクロールなし。4冊とフッターまで見切れていない。
- PC幅（1280px）: カードが2列。ヘッダー・本文・フッターが横幅いっぱいに収まる。

## 判断の記録

今週の実装で判断が必要だった場面:

- 選択肢A: 評価を `"★★★★☆"` の文字列で props に渡す
- 選択肢B: 評価を `4` の数値で渡し、コンポーネント側で星に変換する
- 採用した理由: データは「何点か」という数値のまま持った方が後から並べ替えや平均に使いやすい。表示用の ★ は `BookCard` の見た目の仕事なので、コンポーネント側で変換する。
- 確認方法: `rating: 5` の本が `★★★★★`、`rating: 4` の本が `★★★★☆` になることをブラウザで確認した。

## AI利用

- 使ったAIツール: Cursor（チャットのコーディング支援）
- 何を依頼したか: Week14 POSSE課題の React 書籍紹介ページの実装、Tailwind 導入、ブラウザ確認、GitHub への push
- 自分で修正した箇所: （提出前に自分で見た目・本の内容を確認して直した点を書く）
