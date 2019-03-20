---
title: "Button"
date: 2019-02-17T18:46:28+09:00
categories : [ "component" ]
---

<h1 class="main_title">Button</h1>
			<div class="main_code">
				<h2>共通HTML,CSS</h2>
				<div class="grid code_content">
					<input type="checkbox" name="accordion" id="navPhp">
					<label for="navPhp" style="grid-column: 2;">+</label>
					<div class="code_item">
						<p>html</p>
						<p>rel,_btnの前は任意で変更</p>
                        
```html
<a href="#" type="button" rel="" class="_btn"><span>more</span></a>
```

<p>css</p>

```css
[class*="_btn"],[class*="_btn"]:hover{
	display:inline-block;
	padding:.5rem;
	margin:.25rem;
	color: var(--font-color);
	text-align:center;
	text-decoration: none;
	transition:.3s;
}
[class*="_btn"]:hover{
}
```

</div>
</div>
</div>

<h2 class="main_title">オーソドックスタイプ</h2>
<div class="main_code">
	<p class="codepen" data-height="500" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="KJvQRy" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="Button">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/KJvQRy/">
		Button</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>