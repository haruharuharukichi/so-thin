---
title: "Form"
date: 2019-02-17T18:46:41+09:00
categories : [ "component" ]
---

<h1 class="main_title">Header</h1>
<div class="main_code">
	<h2>PHPベーシックコード</h2>
	<div class="grid code_content">
		<input type="checkbox" name="accordion" id="headerPhp">
		<label for="headerPhp" style="grid-column: 2;">+</label>
		<div class="code_item">
			<p>問い合わせフォーム</p>

```html
<div class="form_wrapper">
  <div class="form_content">
    <label class="flex"> お名前 (必須)
    </label>
    [text* your-name placeholder"例）山田　太郎"]
  </div>
  <div class="form_content">
    <label class="flex">メールアドレス (必須)</label>
    [email* your-email placeholder"sample@ao.to"]
  </div>
  <div class="form_content">
    <label class="flex">題名</label>
    [text your-subject placeholder"バナーについて"]
  </div>
  <div id="message" class="form_content">
    <label class="flex">メッセージ本文</label>
    [textarea* your-message placeholder"掲載依頼です"]
  </div>
  <div class="form_content">
    [submit "送信"]
  </div>
</div>
```

</div>
</div>
</div>

<h2 class="main_title">オーソドックスタイプ</h2>
<div class="main_code">
    <p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="oVdgeB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="oVdgeB">
    <span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/oVdgeB/">
    oVdgeB</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>

<h2 class="main_title">アプリ型</h2>
<div class="main_code">
  <p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="JzaZpK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="formApp">
    <span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/JzaZpK/">
    formApp</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>