---
title: "Naming"
date: 2019-02-17T17:23:51+09:00
---

<h1>BEMカスタム命名規則</h1>
<div id="namingClass">

<h2>超具体的な使用例</h2>

```html
<nav class="navbar_wrapper">
	<ul class="navbar_list">
		<li><a href="" class="navbar_link">link</a></li>
		<li><a href="" class="navbar_link">link</a></li>
		<li><a href="" class="navbar_link">link</a></li>
	</ul>
</nav>
<header class="header_wrapper">
	<h1 class="header_title">title</h1>
	<p class="header_description">description</p>
</header>
<main class="container">
	<section class="main_wrapper">
		<h2 class="main_title">main title</h2>
		<p class="main_description">main information</p>
	</section>
	<section class="main_wrapper">
		<div class="main_bgr"></div>
		<h2 class="main_title">main title</h2>
		<p class="main_description">main information</p>
		<ul class="main_content list">
			<li class="main_item">
				<div class="main_card">
					<div class="card_header">
						<div class="card_title">card title</div>
						<div class="card_description">card information</div>
					</div>
					<div class="card_body">
						<div class="card_text">card text</div>
					</div>
				</div>
			</li>
			<li class="main_item">
				<div class="main_card">
					<div class="card_header">
						<div class="card_title">card title</div>
						<div class="card_description">card information</div>
					</div>
					<div class="card_body">
						<div class="card_text">card text</div>
					</div>
				</div>
			</li>
			<li class="main_item">
				<div class="main_card">
					<div class="card_header">
						<div class="card_title">card title</div>
						<div class="card_description">card information</div>
					</div>
					<div class="card_body">
						<div class="card_text">card text</div>
					</div>
				</div>
			</li>
		</ul>
	</section>
</main>
<aside class="sidebar_wrapper">
	<div class="sidebar_widget"></div>
</aside>
<footer class="footer_wrapper">
	<p class="footer_text">copyright 2019~ so-thin</p>
</footer>
```

<h2>クラス名</h2>
<h3>メインクラス</h3>
<ul>
	<li>Blockはセクション名+_wrapper(Block単体ではなく、Block_elementのように扱う)</li>
	<li>Blockは量産せず、なるべく少ないブロック数でコーディングする</li>
	<li>Block名はHTML5のタグ名をベースにした物を使う</li>
	<li>BlockとElementはスネークケースで繋ぐ</li>
	<li>Modifierは単語</li>
	<li>Modifier単体では使わない</li>
	<li>Block名等が2単語以上からなる場合はキャメルケースで繋ぐ</li>
	<li>組み合わせが限定される場合はセレクターでの指定を許可する(ul→li,.btn→spanなど)</li>
	<li>Elementの中のElementはどちらもBlockの直接の子要素として考える</li>
	<li>例外として、card,post等の多用する、かつ他との差別化が必要になる要素名の場合は親Elementをブロックとして考える</li>
	<li>card等の種類の識別にはModifierを使用する</li>
	<li>必要に応じてsectionにidを設定する</li>
	<li>Block名等が2単語以上からなる場合はキャメルケースで繋ぐ</li>
</ul>
<h3>グローバルクラス（特殊クラス）</h3>
<ul>
	<li>メインクラスの補助としてグローバルクラスを導入しても良い</li>
	<li>JSにクラスを使う場合、一般的な装飾を行う場合はグローバルクラスとして扱う</li>
	<li>JSにクラスを使う場合は先頭を大文字に</li>
	<li>グローバルクラスにBEMの概念は使用しない</li>
	<li>基本的にグローバルクラスは単語で使用する</li>
	<li>グローバルクラスの接続が必要な場合はケバブケース(ハイフン)を使う</li>
	<li>Block名等が2単語以上からなる場合はキャメルケースで繋ぐ</li>
	<li>記述はグローバルクラス→メインクラスの順（一般的な設定→細かい設定の順）</li>
</ul>
<h3>サンプル</h3>
<h4>名前使用例</h4>
<h5>メインクラス</h5>
<p>Block</p>
<ul>
	<li>navbar</li>
	<li>header</li>
	<li>main</li>
	<li>sidebar</li>
	<li>footer</li>
</ul>
<p>Element</p>
<ul>
	<li>inner</li>
	<li>content</li>
	<li>item</li>
	<li>header</li>
	<li>img</li>
	<li>body</li>
	<li>title</li>
	<li>description</li>
	<li>text</li>
</ul>
<p>Modifier</p>
<ul>
	<li>active</li>
	<li>select</li>
	<li>main</li>
	<li>aside</li>
	<li>footer</li>
</ul>
<h5>グローバルクラス</h5>
<ul>
	<li>container</li>
	<li>Inview</li>
	<li>inline-left</li>
	<li>inline-center</li>
	<li>inline-right</li>
</ul>
<h4>HTML</h4>

```html
<section class="container">
	<div class="block_wrapper">
		<div class="block_element"></div>
		<div class="block_element modifier">
	</div>
</section>
<section class="container">
	<div class="blockBlock_wrapper">
		<div class="blockBlock_element"></div>
		<div class="blockBlock_element modifier"></div>
	</div>
</section>
<section id="blockName" class="container　inline-center　block_wrapper">
	<h2 class="block_title">title</h2>
	<p class="block_element">text</p>
	<div class="block_content">
		<div class="block_card active">
			<h2 class="card_title">title</h2>
			<p class="card_description">informaiton</p>
			<p class="card_text">text</p>
		</div>
		<div class="block_card">
			<h2 class="card_title">title</h2>
			<p class="card_description">informaiton</p>
			<p class="card_text">text</p>
		</div>
		<div class="block_card">
			<h2 class="card_title">title</h2>
			<p class="card_description">informaiton</p>
			<p class="card_text">text</p>
		</div>
	</div>
</section>
```

<h4>CSS/SCSS</h4>

```css
.block {
	&_wrapper {}
	&_element {
		&.modifier {}
	}
}

.blockBlock {
	&_wrapper {}
	&_element {
		&.modifier {}
	}
}

#blockName{
	&.block{
		&_wrapper {}
		&_content{}
		&_title{}
		&_text{}
		&_card{
			&.active{}
			&card{
				&_title{}
				&_description{}
				&_text{}
			}
		}
	}
}
```



</div>
<div id="namingId">
	<h2>ID名</h2>
	<ul>
		<li>idはキャメルケースで設定する</li>
		<li>idはページ名+セクション名+要素名でつける。複数ある場合は要素名の後に数字 ex)indexMainTitle</li>
		<li>全ページで使用する場合はglobal+要素名</li>
		<li>jsはidとdata属性を利用する</li>
	</ul>
</div>
<div class="namingImg">
	<h2>画像名</h2>
	<ul>
		<li>./lib/images内で管理する</li>
		<li>画像名は全ページで使いまわすものは要素名のみ</li>
		<li>特定のページやセクションでしか使わないものはページ名_セクション名_要素名_番号の順で必要なものを入れる</li>
	</ul>
</div>