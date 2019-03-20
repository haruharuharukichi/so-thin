---
title: "Plugin"
date: 2019-02-17T18:33:01+09:00
---

# プラグイン

## 必須プラグイン

### BackWPUp

一番最初に入れるべきプラグイン  
データベースとファイル等のバックアップを作成し、サーバーに自動保存してくれるプラグイン

以下設定方法  
https://bazubu.com/how-to-use-backwpup-23804.html

### All in one SEO Pack

SEO関係は大体これ入れとけば大丈夫なプラグイン  
ものすごく多機能でxmlサイトマップも作成してくれる  

※現在、meta要素は設定してもあまり意味をなさないものが多い為キーワードやディスクリプションの設定はほどほどに

以下設定方法

1. 導入と有効化したら、左サイドバーからAll in one SEO Packの一般設定へ
1. ホームページ設定でタイトルとサイトの詳細を設定
1. タイトル設定は必要に応じて編集（書き換えは有効に）
1. Noindex設定で投稿と固定ページ以外をNOINDEXに、NOFOLLOWも同じ
1. 同じくNoindex設定でカテゴリー以外をnoindex,nofollow
1. 詳細設定から、ディスクリプションを自動生成にチェック
1. 設定を保存
1. 左サイドバーから機能管理に移り、XMLサイトマップと悪意あるボットのブロッカーを有効化しておく

参考URL  
https://bazubu.com/all-in-one-seo-pack-23836.html

### WP fastest cache

キャッシュを使ってサイトを早くしてくれるプラグイン  
あると無いとじゃ大違い  
※有効化すると、CSSやJSもキャッシュを作成します。有効化後にサイトを編集する場合は、編集完了後にすべてのキャッシュをクリアする必要があります

1. 設定画面をスクロールし、言語を日本語に設定
1. モバイルの項目以外全てチェックを入れる
1. preloadは事前にキャッシュを作成する項目なので、Restart After Completed以外大体チェックを入れる。
1. 保存して終了

有効化した後に編集した場合は、上部ナビゲーションの「clear cache」から「Delete Cache and Minified CSS/JS」をクリック  

参考URL  
https://pasolack.com/wordpress/wp-fastest-cache/#Preload

### EWWW Image Optimizer

画像圧縮プラグイン  
wp fastestと一緒に使うとだいぶ早くなる（はず）  
設定項目はほとんどなし

参考リンク  
https://bazubu.com/ewww-image-optimizer-23864.html

### SiteGuard WP Plugin

セキュリティ対策用プラグイン  
これ入れておけばセキュリティは大体OK、有効化するだけでいいという優れもの  
ただ、有効化するとログインページのURLが変わってしまうので、納品直前に入れるくらいがちょうどいい。あとログインURLのコピー忘れずに

https://lifool.com/wordpress-site-guard-wp-plugin/

## 推奨プラグイン

### お問合せフォーム

#### Contact Form 7 & CF7 Smart Grid Design Extension

鉄板お問い合わせフォームCF7  
ただ、そのままだとレイアウトがしょっぱいのでデザインいじる用のプラグインを一緒に入れるべし  

1. 両方インストールして有効化
1. 左サイドバーよりお問い合わせの新規追加をクリック、名前を英語で設定（日本語だと埋め込み用コードが長くなる）
1. textでの編集にし、好きにHTMLを編集していく

HTML記入例

```html
<div class="grid grid-form">
  <div class="form_row">
    <label class="flex"> お名前 (必須)</label>
    [text* your-name placeholder"例）山田　太郎"]
  </div>
  <div class="form_row">
    <label class="flex">メールアドレス (必須)</label>
    [email* your-email placeholder"sample@ao.to"]
  </div>
  <div class="form_row">
    <label class="flex">題名</label>
    [text your-subject placeholder"バナーについて"]
  </div>
  <div id="message" class="form_row">
    <label class="flex">メッセージ本文</label>
    [textarea your-message placeholder"掲載依頼です"]
  </div>
</div>
<div class="flex">
  [submit "送信"]
</div>
```

**フォームの要素について**

- []で入れ込む
- 部品名の後に※で必須化
- 部品の名前はメールへの埋め込みに使う
- placeholder""で記入例などを表示できる
- id:○○,class:○○でクラスやIDを付与できる

**管理者への問い合わせ報告メールを作成する**

1. 項目を作成したらメールタブをクリック
1. 送信先をクライアントのメールアドレスに
1. 題名・本文にフォーム部品を埋め込んでいく

**自動返信メールを作成する**

1. メール（２）を使用にチェック
1. 上と同じく部品を組み込んでメールテンプレを作成

完了したら保存、ショートコードを表示したいページに張り付ける

#### reCAPTCHA

CF7スパム対策

問い合わせフォームを使ったスパム対策には、reCAPTCHAを導入する  
Googleアカウントが必要になるので、クライアントに実行して貰うのが良い 

以下公式URL  
https://contactform7.com/ja/recaptcha/

#### Flamingo

CF7履歴管理

CF7のユーザーとのやりとりの履歴を管理できるプラグイン

参考URL
https://design-plus1.com/tcd-w/2016/07/flamingo.html

### 予約フォーム

#### Salon booking

デザインはしょっぱいが、機能は充実しているサロン予約プラグイン  
機能が豊富  
予約確定方法は「管理者が確定」「則確定」「自動メールからユーザーが確定」の３種

色々多すぎるので、以下公式サイト参考  
https://salon.mallory.jp/

1. 左サイドバーから、サロン全体の設定→環境設定
1. 項目を設定する
1. 店とスタッフの情報も登録する（最低１件はしないと動かない）
1. 予約画面表示用の固定ページを新規作成し、[salon-booking]を本文に埋め込む

#### MTS Simple Booking

無償版と有償版がある、デザイン寄りの予約プラグイン  
オプション機能・ユーザー登録機能・問合せフォーム機能が有料だが、選択オプションはコーディングで追加できる  
予約確定は自動返信メール

1. http://mtssb.mt-systems.jp/downloadp/ からダウンロード
1. 予約品目から新規項目を作成
1. 予約品目一覧からサロンのリンクをホバーし、post=xxのidを記録
1. 予約カレンダーを表示するページに[monthly_calendar id="xx"]を埋め込み
1. 予約フォーム表示用固定ページのスラッグ名に「booking-form」と入力し保存
1. booking-thanks」と名付けた固定ページを作成し、予約完了ページを構築（任意）

参考URL  
http://mtssb.mt-systems.jp

---

**コースを追加する**

1. エディタでプラグインのMTS Simple Bookingフォルダに移動
1. https://www.nishi2002.com/3502.html を参考に編集

---

**コースを複数選択できるようにする**

1. 同じくMTS Simple Bookingフォルダを編集する
1. https://www.nishi2002.com/7856.html を参考に編集

### 多言語化

方法は大きく分けて３つ  

- 言語別にWordPressを分ける
- マルチサイトで作成する
- プラグインを使う

一番楽なのはプラグインを使う方法だが、これも大きく分けて３種類ある

- マルチサイト(1サイト1言語)型
- １言語１記事型
- １記事複数言語型

#### マルチサイト

##### Multisite Language Switcher

マルチサイトを作成してから導入して多言語化するタイプのプラグイン

1. 1つのサーバー内に複数のワードプレスをインストールする
1. プラグインをインストール
1. 管理画面から多言語化

参考URL  
https://skygold.jp/web/4646/

#### １言語１記事型

##### polylang

記事を言語ごとに設定するタイプのプラグイン

1. 設定→言語から使用言語を追加する
1. 文字列翻訳から必要な部分を翻訳する
1. URLを設定する
1. コンテンツ・ウィジェット・カテゴリ諸々を多言語対応させる
1. 言語スイッチャーをメニューに追加

参考URL  
https://ruuski.net/web/polylang-wordpress-plugin-for-multilingual-sites/

##### Bogo

CF7の作者制作プラグイン

参考URL  
https://pronama.jp/2014/07/17/wordpress-bogo/

#### １記事複数言語型

##### qTranslate X

参考URL  
https://www.webcreatorbox.com/tech/qtranslate-multilingual-wordpress-plugin