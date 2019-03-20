---
title: "Navigation"
date: 2019-02-17T18:47:06+09:00
categories : [ "component" ]
---

<h1>Navigation</h1>
<div class="main_code">
	<h2>PHPベーシックコード</h2>
	<div class="grid code_content">
		<input type="radio" name="accordion" id="navPhp">
		<label for="navPhp">+</label>
		<div class="code_item">
			<p>header.php</p>

```php
<nav role="navigation" id="navbar" class="grid container navbar_wrapper">
	<?php 
		if ( function_exists( 'the_custom_logo' ) ) {
		$custom_logo_id = get_theme_mod( 'custom_logo' );
		$custom_logo_url = wp_get_attachment_image_url( $custom_logo_id , 'full' );

		echo '<a class="flex navbar_brand" href="' . esc_url( home_url() ) . '" rel="home"><span class="navbar_logo" style="background-image:url(' . esc_url( $custom_logo_url ) . ');"></span></a>';
	}
	?>
	<button class="navbar_toggler" id="navbarToggler" type="button">
		<span></span>
		<span></span>
		<span></span>
	</button>
	<?php 
	wp_nav_menu( array(
	'theme_location'=>'Navigation', 
	'menu_class'    =>'navbar_list',
	'container'     =>false, 
	'items_wrap'    =>'<ul class="%2$s">%3$s</ul>'));
	?>
</nav>
```

</div>
<input type="radio" name="accordion" id="funcPhp">
<label for="funcPhp">+</label>
<div class="code_item">
<p>function.php</p>

```php
//navigationの登録
register_nav_menu( 'Navigation', 'ナビゲーション' );


//カスタムロゴ追加
add_theme_support( 'custom-logo', array( 'size' => 'raindrops-logo' ) );


//ナビゲーションのアンカータグにクラスを追加
function add_menuclass($ulclass) {
	return preg_replace('/<a /', '<a class="navbar_link"', $ulclass);
}
add_filter('wp_nav_menu','add_menuclass');


// 【必要に応じて】クラスを編集して、ナビゲーションの表示中メニューに 'current' クラスを付与する
add_filter( 'nav_menu_css_class', 'remove_to_currentClass', 10, 2 );
function remove_to_currentClass( $classes, $item ) {
	$classes = array();
	if( $item -> current == true ) {
		$classes[] = 'current';
	}
	return $classes;
}
```

</div>
</div>
</div>

<h2 class="main_title">オーソドックスタイプ</h2>
<div class="main_code">
	<h3 class="main_title">ノーマル</h3>
	<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="haruharuharukichi" data-slug-hash="XOMjEx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="XOMjEx">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/XOMjEx/">
		XOMjEx</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<div class="main_code">
	<h3 class="main_title">sticky</h3>
	<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="davOEz" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="davOEz">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/davOEz/">
		davOEz</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<div class="main_code">
	<h3 class="main_title">fixed</h3>
	<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="yZMVGm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="yZMVGm">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/yZMVGm/">
		yZMVGm</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<h2 class="main_title">フルスクリーンタイプ</h2>
<div class="main_code">
	<p class="codepen" data-height="500" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="JxNRym" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="navbarFull">
		<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/JxNRym/">
		navbarFull</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
		on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>
<h2 class="main_title">アプリ型</h2>
wp化の際はメニューを２つ作ると楽
<div class="main_code">
	<p class="codepen" data-height="500" data-theme-id="0" data-default-tab="css,result" data-user="haruharuharukichi" data-slug-hash="JzZxBr" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="navbarApp">
	<span>See the Pen <a href="https://codepen.io/haruharuharukichi/pen/JzZxBr/">
	navbarApp</a> by haruharuharukichi (<a href="https://codepen.io/haruharuharukichi">@haruharuharukichi</a>)
	on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>


