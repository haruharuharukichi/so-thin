---
title: "Header"
date: 2019-02-17T18:46:52+09:00
categories : [ "component" ]
---

<h1 class="main_title">Header</h1>
<div class="main_code">
	<h2>PHPベーシックコード</h2>
	<div class="grid code_content">
		<input type="radio" name="accordion" id="headerPhp">
		<label for="headerPhp">+</label>
		<div class="code_item">
			<p>header.php</p>

```php
<header role="banner" class="flex header_wrapper" style="background-image:url(<?php header_image(); ?>);">
	<div class="header_content">
		<h1 class="header_title">
		<?php
		if(is_home()){
			bloginfo( 'name' ); ?></h1>
			<p class="header_descripiton"><?php bloginfo( 'description' ); ?></p>
			<?php
		}else{
			if(is_single()){
				$category = get_the_category($post->ID); 
				echo $category[0]->cat_name;
			}elseif(is_archive()){ 
				echo "archive";
			}elseif (is_search()) { 
				echo "search";
			}elseif (is_404()) {
				echo "not found";
			}else{
				the_title();
			} ?>
		</h1>
			<?php
		} ?>
	</div>
</header>
```

</div>
<input type="radio" name="accordion" id="funcPhp">
<label for="funcPhp">+</label>
<div class="code_item">
<p>function.php</p>
```php
//カスタムヘッダー追加
add_theme_support( 'custom-header' );
```
</div>
</div>
</div>

<h2 class="main_title">オーソドックスタイプ</h2>
<div class="main_code">
	<h3 class="main_title">ノーマル</h3>
	<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="mvmReX" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="headerBasic">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/mvmReX/">
		headerBasic</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<div class="main_code">
	<h3 class="main_title">Grid</h3>
	<p class="codepen" data-height="500" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="MLmpgJ" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="headerGrid">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/MLmpgJ/">
		headerGrid</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>

## カスタム

<div class="main_code">
	<h3 class="main_title">BgrGrid</h3>
	<p class="codepen" data-height="500" data-theme-id="0" data-default-tab="html,result" data-user="haruharuharukichi" data-slug-hash="xMdqpa" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="header">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/xMdqpa/">
		header</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<div class="main_code">
	<h3 class="main_title">ミドル</h3>
	<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="VRGEpm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="headerMiddle">
	<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/VRGEpm/">
	headerMiddle</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
	on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>