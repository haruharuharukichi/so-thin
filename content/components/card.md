---
title: "Card"
date: 2019-02-17T18:46:34+09:00
categories : [ "component" ]
---

<h1 class="main_title">Card</h1>
<div class="main_code">
	<h2>共通CSS</h2>
	<div class="grid code_content">
		<input type="checkbox" name="accordion" id="cardCss">
		<label for="cardCss" style="grid-column: 2;">+</label>
		<div class="code_item">

			```css
				position: relative;
				width: 100%;
				background-color:var(--base-color);
			}
			.main_card.grid{
				grid-gap: 0;
					grid-template-columns: 1fr;
					grid-template-rows: 40% 60%;
					align-items: center;
			}
			.card_title{
				margin: 0;
			}
			.card_img{
				display:block;
				width: 100%;
				object-fit: cover;
			}
			.card_icon{
				max-width:100%;
				max-height:100%;
				padding: 1rem;
				object-fit:contain;
			}
			.card_header{
				position:relative;
				width: 100%;
				padding: 1rem;
				background-color: var(--main-color);
				color: var(--base-color);
			}
			.main_card.grid .card_header{
				height:100%;
			}
			.card_header .card_title{
				width: 100%;
				margin: 0;
			}
			.card_body{
				position:relative;
				width: 100%;
				padding: 1rem;
			}
			.card_description{
				position:absolute;
				top:0;
				left:0;
				margin:0;
			}
			.card_text{
				margin: 0;
				margin-bottom: 1rem;
			}
			.card_btn{
				display: block;
				padding: .5rem;
			}
			.card_btn.flex{
				display:flex;
				}
			```

</div>
</div>
</div>
<h2>デザイン</h2>
<h3 class="main_title">オーソドック</h3>
<div class="main_code">
	<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="zewXER" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CardBasic">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/zewXER/">
		CardBasic</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<h3 class="main_title">正方形</h3>
<div class="main_code">
	<p class="codepen" data-height="500" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="LqyoVK" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CardSquare">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/LqyoVK/">
		CardSquare</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<h3 class="main_title">横型</h3>
<div class="main_code">
	<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="result" data-user="haruharuharukichi" data-slug-hash="KEZMRL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CardSide">
	<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/KEZMRL/">
	CardSide</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
	on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<h3 class="main_title">食い込み</h3>
<div class="main_code">
	<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="haruharuharukichi" data-slug-hash="gEoLym" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CardSpacer">
	<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/gEoLym/">
	CardSpacer</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
	on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<h2>配置</h2>
<h3 class="main_title">カラム</h3>
<div class="main_code">
	<p class="codepen" data-height="500" data-theme-id="0" data-default-tab="html,result" data-user="haruharuharukichi" data-slug-hash="XGqNBe" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="CardColumn">
	<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/XGqNBe/">
	CardColumn</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
	on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
