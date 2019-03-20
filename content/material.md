---
title: "Material"
date: 2019-02-24T16:10:45+09:00
---

# 素材の集め方・おすすめサイト

## 色

### お薦めサイト

- [ColorPick Eyedropper](https://chrome.google.com/webstore/detail/colorpick-eyedropper/ohcpnigalekghcmgcdcenkpelffpdolg)
    - 困ったらまずコレ。気に入ったサイトで起動すれば、色コードを簡単に取得できる。TTP（徹底的にパクる）する際に便利
- [パレットン](http://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF)
    - 色相を考えて合う色を計算してくれる優れもの。暗明のバリエーションもあるので、ぶっちゃけ全部これ使えばいいんじゃね？
- [palettable](https://www.palettable.io/D256FF)
    - 色をどんどん提案してくれるので、サブ配色を決める際に便利
- [COLOR TOOL](https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=E53935)
    - マテリアルデザインの定義に従った配色を提案してくれる
- [カラーコード変換ツール](https://tech-unlimited.com/color.html)
    - 何かと便利な変換ツール。

### お薦め色の決め方

1. ColorPick Eyedropperを使って参考にしたサイトのメインカラーをコピー
1. イメージに合うように、パレットンで色をちょっとずらす
1. メインカラーをものすごく明るくしたのと、ものすごく暗くしたのをそれぞれベースカラー、フォントカラーとして採用
1. イメージに合い、メインカラーと喧嘩しないサブカラーとアクセントカラーをパレットンで探す（角度と明暗を調整しつつ探す）
1. 実装してみて合わなければ修正

実装には、以下のようにstyle.cssのトップにCSS変数を宣言し、使用か所ではそれを呼び出すと良い。

```css
:root{
	--base-color:rgb(247,247,247);/*#f7f7f7*/
	--base-transparent:rgba(247,247,247,.4);
	--font-color:rgb(35, 31, 32);/*#231f20*/
	--main-color:rgb(0, 140, 9);/*#008C09*/
	--accent-color:rgb(226, 174, 5);/*#E2AE05*/
}

/*使用か所*/
.main_title{
    color:var(--base-color);
    background-color:var(--main-color);
}
```

※CSS変数は動かないブラウザもあるので、GitHub Pagesへの実装の際は全て通常の色指定に戻す事

```css
/*GitHub Pagesアップの際はこれはダメ*/
.main_title{
    color:var(--base-color);
    background-color:var(--main-color);
    border:1px solid var(--base-transparent);
}

/*これに治す*/
.main_title{
    color:#f7f7f7;
    background-color:#008C09;
    border:1px solid rgba(247,247,247,.4);
}
```

## 画像

### お薦めサイト

- [freephotos](https://freephotos.cc/ja)
    - 外国人メインのフリー画像サイト。著作権表示必要なし。風景画が綺麗
- [pixabay](https://pixabay.com/ja/)
    - 同じく外国メインのフリー画像サイト。著作権表示必要なし。
- [GAHAG](http://gahag.net/)
    - アジア系女性が多いフリー画像サイト
- [パブリックドメインQ](https://publicdomainq.net/)
    - アジア系女性が多いフリー画像サイト
- [写真AC](https://www.photo-ac.com/)
    - ログインが必要なフリー画像サイト。モノ・風景などには良いかも
- [freepik](https://jp.freepik.com/)
    - ベクター素材を集めたサイト
- [FIND47](https://find47.jp/ja/list/)
    - 経産省公式フリー画像サイト。**著作権表示が必要**なのがネック
- [PHOTOSHOP VIP](http://photoshopvip.net/freebies/free-pic)
    - デザイン関係色々まとめたサイト

ダウンロードした画像はサイズが大きすぎて重いので、サイズと容量を縮小させて軽くする（サイトの読み込みを遅くする最大の原因が画像サイズ）。

### 画像修正方法

フォトショが無い場合は、[GIMP](https://www.gimp.org/downloads/)を使いましょう。  
レイヤーの概念がある為わりと使いやすい。

#### 縦横サイズ修正

1. GIMPを起動
1. 編集したい画像をGIMPの画面にドラッグ＆ドロップ
1. 画像の上で右クリック→画像→「画像の拡大・縮小」を選択
1. 幅を適正な値に修正（フルスクリーン表示するなら1980px,しないなら1200px推奨）
1. 拡大縮小をクリック
1. また右クリック→レイヤー→「レイヤーをキャンパスにあわせる」を選択
1. 左上のファイル→「〇〇に上書きエクスポート」を選択し、終了（gimpファイルは保存しないでも良い）

#### 容量圧縮

1. [JPG圧縮](https://compressjpeg.com/ja/)または[PNG圧縮](https://compresspng.com/ja/)にアクセス
1. ファイルをアップロード
1. 画像のサムネイルをクリック
1. クオリティを７０に設定し摘要をクリック
1. 全てダウンロードし、ファイル名から「-min」を削除し元ファイルに上書き

## アイコン

### お薦めサイト

- [ICCON MONO](http://icooon-mono.com/)
    - やや線が太めのアイコン
- [iconmonstr](https://iconmonstr.com/)
    - 数は少ないが使いやすい
- [MATERIAL ICON](https://material.io/tools/icons/?style=baseline)
    - Google提供
- [font awesome](https://fontawesome.com/)
    - 割とメジャー

### SVG使い方

SVGは基本的にインライン（HTMLに組み込ん）で使用する。  
必要に応じてwidth,heightを調整して使用する。

```html
<svg version="1.1" id="Svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve">
    <!-- グラデーションを効かせたい時に使う -->
    <defs>
        <linearGradient id="gradientId">
            <stop class="stop1" offset="0"/>
            <stop class="stop2" offset="0.5"/>
        </linearGradient>
    </defs>
    <!-- 本体。gタグはpathが1つしかないときはいらない -->
    <g>
        <path id="pathId1" d="座標"></path>
        <path d="座標"></path>
    </g>
</svg>
```

```css

#gradientId .stop1{
		stop-color: var(--accent-color);
	        animation: reflect 3.2s 0.1s infinite;
}
#gradientId .stop2{
		stop-color: var(--main-color);
	        animation: reflect 3.2s 0s infinite;
}
#pathId1{
	fill: url(#gradientId);
}
@keyframes reflect{
	0%{
		stop-color: var(--font-color);
	}
	30%{
		stop-color: var(--font-color);
	}
	55%{
		stop-color: var(--accent-color);
	}
	75%{
		stop-color: var(--main-color);
	}
	100%{
		stop-color: var(--font-color);
	}
}
```

## フォント

### お薦めサイト

- [Google font](https://fonts.google.com/)
    - 定番最強サイト。これのmontserrat愛してる。困ったらmontserratで
- [CSSのWebフォント](https://thinkit.co.jp/story/2011/08/18/2233)
    - 無駄にDLしないでも良いことも
- [フォント20選](https://www.soldi.jp/articles/font_select_2017/)
    - 有料版も入ってるが参考にはなる。

困ったら「PHOTOSHOP VIP　フォント」でググろう  
英字はWebフォント、日本語本文はCSS3のフォントが速度の面で合理的
Google fontはCDNで使うと便利だが、トラフィックの多いサイトでは通信が増えると重くなることも。  
ダウンロードしてソースに追加して使用する方が合理的な場合は、其方を採用しましょう

### フォント使用方法

#### CDN
CDNなら、Google fontからとってきたリンクをヘッダーに追記

```html
<head>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,900" rel="stylesheet">
</head>
```

CSSの上部に追記（font-familyのデフォルトはinheritなのでhtmlタグに適用するだけで全てに効く）

```css
html{
	font-family: 'Montserrat', sans-serif;
}
```

#### ダウンロード（ソースに追加）

使用可能拡張子（早い順）

- woff2
- woff
- ttf
- otf

拡張子はwoff2が一番軽いので、可能な限りwoff2を使いましょう  
woff2,woffはIEでは使えないこともあるので、IEでのWebフォントは捨てましょう！

1. 拡張子がwoff出ない場合は[woffコンバーター](https://convertio.co/ja/ttf-woff/)で変換
1. libフォルダ内にfontsフォルダを作成し、woffファイルをアップロード
1. CSSを編集

```css
@font-face {
  font-family: 'WebFont';
  src: url('./lib/fonts/WebFont.woff2') format('woff2'),
        url('./lib/fonts/WebFont.woff') format('woff'),
       url('./lib/fonts/WebFont.ttf') format('truetype');
}
html {
  font-family: 'WebFont';
}
```

## JSライブラリ・フレームワーク

### お薦め機能

- [inview.js](https://github.com/protonet/jquery.inview)
    - 画面に映ったら〇〇が出来る
- [slick.js](http://kenwheeler.github.io/slick/)
    - スライドショー
- [scrollr](https://github.com/Prinzhorn/skrollr)
    - パララックス
