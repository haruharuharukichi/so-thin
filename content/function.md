---
title: "Function"
date: 2019-02-17T18:32:51+09:00
---

# function.php

## PHPベーシックコード

function.phpの基礎的な記述内容です。  
先ず以下を張り付けてから、必要に応じてコードを追加していきましょう

```php
<?php

/*
*削除系・追加系・編集系の3種類
*系列を検索する際はCtrl+Fを押してから「○○系」と入力
*/

/******************削除系******************/

//SEO対策
// WordPressバージョン情報の削除
remove_action('wp_head', 'wp_generator');
// ショートリンクURLの削除
remove_action('wp_head', 'wp_shortlink_wp_head');
// wlwmanifestの削除
remove_action('wp_head', 'wlwmanifest_link');
// application/rsd+xmlの削除
remove_action('wp_head', 'rsd_link');
// RSSフィードのURLの削除
remove_action('wp_head', 'feed_links_extra', 3);


//自動成形停止
remove_filter( 'the_content', 'wpautop' );

function override_mce_options( $init_array ) {
    $init_array['indent']  = true;
    $init_array['wpautop'] = false;

    return $init_array;
}
add_filter( 'tiny_mce_before_init', 'override_mce_options' );


//ツールバー非表示
add_filter('show_admin_bar', '__return_false');


//Contact Form 7が読み込むCSSを削除
add_action( 'wp_enqueue_scripts', 'my_delete_plugin_styles' );
    function my_delete_plugin_styles() {
    wp_deregister_style( 'contact-form-7' );
}


//メディア挿入時のデフォルトのリンク先を「なし」に設定する
function webshufu_default_noimagelink() {
    $webshufu_default_imagelink = get_option( 'image_default_link_type' );
    if ($webshufu_default_imagelink !== 'none') {
    update_option('image_default_link_type', 'none');
    }
}
add_action('admin_init', 'webshufu_default_noimagelink', 10);


//imgタグのwidth,height削除
add_filter( 'post_thumbnail_html', 'remove_width_attribute', 10 );
add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );
function remove_width_attribute( $html ) {
    $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
    return $html;
}


/******************追加系******************/


//タイトル追加
function my_setup_theme() {
    add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'my_setup_theme' );


//navigationの登録
register_nav_menu( 'Navigation', 'ナビゲーション' );


//ナビゲーションのアンカータグにクラスを追加
function add_menuclass($ulclass) {
return preg_replace('/<a /', '<a class="navbar_link"', $ulclass);
}
add_filter('wp_nav_menu','add_menuclass');


// クラスを編集して、ナビゲーション表示中メニューに 'current' クラスを付与する
add_filter( 'nav_menu_css_class', 'remove_to_currentClass', 10, 2 );
function remove_to_currentClass( $classes, $item ) {
    $classes = array('');
    if( $item -> current == true ) {
        $classes[] = 'current';
    }
    return $classes;
}

//カスタムヘッダー追加
add_theme_support( 'custom-header' );


//サムネイル追加
add_theme_support('post-thumbnails'); 


//カスタムロゴ追加
add_theme_support( 'custom-logo', array( 'size' => 'raindrops-logo' ) );


//フッターウィジェットエリア追加
register_sidebar(array(
    'name' => 'Footer' ,
    'id' => 'footer' ,
    'before_widget' => '<div class="widget footer_widget">',
    'after_widget' => '</div>',
    'before_title' => '<h3 class="footer_title">',
    'after_title' => '</h3>'
));


//wp_enqueue_script/styleを使ったファイル読み込み
if (!is_admin()) {
    function deregister_script(){  //　登録解除の項目
        wp_deregister_script('jquery');
    }
    function register_files(){  //　登録の項目
        wp_register_script('jquery', 'https://code.jquery.com/jquery-3.3.1.min.js', false, '3.3.1', false );
        wp_register_script( 'inview', get_theme_file_uri() .'/lib/js/jquery.inview.min.js', array( 'jquery' ), '', true);
        wp_register_style( 'googlefont','https://fonts.googleapis.com/css?family=Muli:400,800', array(), '', false);
        wp_register_style( 'iota',get_theme_file_uri() .'/lib/css/iota.css', array(), '', false);
        wp_register_script( 'main', get_theme_file_uri() .'/lib/js/main.js', array( 'jquery' ), '', true);
        wp_register_style( 'style', get_theme_file_uri() .'/style.css', array(), '', false);
    }
    function add_files() {  // 装備の項目
        //deregister_script();
        register_files();
        wp_enqueue_script('jquery');
        wp_enqueue_script('inview');
        wp_enqueue_style('googlefont');
        wp_enqueue_style('iota');
        wp_enqueue_script('main');
        wp_enqueue_style('style');
    }
    add_action('wp_enqueue_scripts', 'add_files');
}


// パンくずリスト表示
function breadcrumb(){
    global $post;
    $str ='';
    if(!is_home()&&!is_admin()){
        $str.= '<div id="breadcrumb" class="cf"><div itemscope class="breadcrumb_item" itemtype="http://data-vocabulary.org/Breadcrumb">';
        $str.= '<a class="breadcrumb_link" href="'. home_url() .'" itemprop="url"><span itemprop="title">HOME</span></a></div>';
        if(is_category()) {
            $cat = get_queried_object();
            if($cat -> parent != 0){
                $ancestors = array_reverse(get_ancestors( $cat -> cat_ID, 'category' ));
                foreach($ancestors as $ancestor){
                    $str.='<div itemscope class="breadcrumb_item" itemtype="http://data-vocabulary.org/Breadcrumb"><a class="breadcrumb_link" href="'. get_category_link($ancestor) .'" itemprop="url"><span itemprop="title">'. get_cat_name($ancestor) .'</span></a></div>';
                }
            }
            $str.='<div itemscope class="breadcrumb_item" itemtype="http://data-vocabulary.org/Breadcrumb"><a class="breadcrumb_link" href="'. get_category_link($cat -> term_id). '" itemprop="url"><span itemprop="title">'. $cat-> cat_name . '</span></a></div>';
        } elseif(is_page()){
            if($post -> post_parent != 0 ){
                $ancestors = array_reverse(get_post_ancestors( $post->ID ));
                foreach($ancestors as $ancestor){
                    $str.='<div itemscope class="breadcrumb_item" itemtype="http://data-vocabulary.org/Breadcrumb"><a class="breadcrumb_link" href="'. get_permalink($ancestor).'" itemprop="url"><span itemprop="title">'. get_the_title($ancestor) .'</span></a></div>';
                }
            }
        } elseif(is_single()){
            $categories = get_the_category($post->ID);
            $cat = $categories[0];
            if($cat -> parent != 0){
                $ancestors = array_reverse(get_ancestors( $cat -> cat_ID, 'category' ));
                foreach($ancestors as $ancestor){
                    $str.='<div itemscope class="breadcrumb_item" itemtype="http://data-vocabulary.org/Breadcrumb"><a class="breadcrumb_link" href="'. get_category_link($ancestor).'" itemprop="url"><span itemprop="title">'. get_cat_name($ancestor). '</span></a></div>';
                }
            }
            $str.='<div itemscope class="breadcrumb_item" itemtype="http://data-vocabulary.org/Breadcrumb"><a class="breadcrumb_link" href="'. get_category_link($cat -> term_id). '" itemprop="url"><span itemprop="title">'. $cat-> cat_name . '</span></a></div>';
        } else{
            $str.='<div class="breadcrumb_item"><span itemprop="title">'. wp_title('', false) .'</span></div>';
        }
        $str.='</div>';
    }
    echo $str;
}


//ページネーション追加
function wp_pagination($page,$total) {
    global $wp_query;
    $big = 99999999;
    $page_format = paginate_links( array(
        'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
        'format' => '?paged=%#%',
        'current' => max( 1, $page ),
        'total' => $total,
        'prev_text'          => __('&laquo'),
        'next_text'          => __('&raquo'),
        'type'  => 'array',
        'before_page_number' => '',
        'after_page_number' => ''
    ) );
    if( is_array($page_format) ) {
        $paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
        echo '<nav role="navigation" aria-label="Page navigation"><ul class="flex main_pagination">';
        foreach ( $page_format as $page ) {
            echo '<li class="flex pagination_item">'.$page.'</li>';
        }
            echo '</ul></nav>';
    }
    wp_reset_query();
}


/******************編集系******************/


//サムネイル表示文字数の調整
function new_excerpt_length($length) {	
    return 50;	
}	
add_filter( 'excerpt_length', 'new_excerpt_length');


//ループの表示記事数を指定
function hwl_home_pagesize( $query ) {
    if ( is_admin() || ! $query->is_main_query() )
        return;

    if ( is_home() ) {
        // オリジナルのブログアーカイブは投稿を3つ表示
        $query->set( 'posts_per_page', 3 );
        return;
    }
    if ( is_archive()|| is_search() ) {
        // オリジナルのブログアーカイブは投稿を9つ表示
        $query->set( 'posts_per_page', 9 );
        return;
    }

}
add_action( 'pre_get_posts', 'hwl_home_pagesize', 1 );
```

## 予約状況反映カレンダー

予約カレンダーが必要な場合は以下のコードを張り付けましょう  
初期設定では  

- 固定ページでカスタムフィールドを利用
- 〇△▼×-により状況を表示
- 一日を2分割
- 3ヶ月分を表示

となっています。  
必要に応じて編集しましょう。
カレンダーのスライドショー表示にslickを使用しています。  
表示させる際にはJS,CSSの読み込みを忘れずに。  
尚、このカレンダーは管理画面から予約状況を反映させる為だけのカレンダーなので、実用の際にはCF7等を使って予約フォームを作成しないといけません。
実装サイトはhttps://ao.to/reserve です

### ベースコード

```php
/*【ここから】カスタム投稿とカスタムフィールドを使って予約状況を反映するカレンダーを作成*/
/*
add_post_metaのmeta_valueを配列に
set_calendar_keysを操作
*/
function add_schedule(){
    $post_id = '';
      if(isset($_GET['post']) || isset($_POST['post_ID'])) {
        $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
      }

      $page_reserve = get_page_by_path('y');
      $page_id = $page_reserve -> ID;  //スラッグが「news」の固定ページの ID
     
      // ID を比較して、合致すればメタボックスを追加
      if ($post_id == $page_id){
        add_meta_box('schedule', '予約状況', 'insert_schedule', 'page', 'normal', 'high');
      }
}
add_action('admin_menu', 'add_schedule');
// カスタムフィールドでカレンダー表示
function insert_schedule(){
    global $post;
    wp_nonce_field(wp_create_nonce(__FILE__), 'my_nonce');
    echo '<p>予約状況を選択してください。【◯】予約可能　【△】やや空きあり　【▼】残りわずか　【×】予約不可　【休】休業日</p>';
    //当月＋2ヵ月分の入力フォームを表示
    echo output_cf_calendar(date('Y'),date('n'));
    echo output_cf_calendar(date('Y'),date('n')+1);
    echo output_cf_calendar(date('Y'),date('n')+2);
}
// カレンダーをDBに保存
function save_schedule($post_id){
    $my_nonce = isset($_POST['my_nonce']) ? $_POST['my_nonce'] : null;
    if(!wp_verify_nonce($my_nonce, wp_create_nonce(__FILE__))) {
        return $post_id;
    }
    if(defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) { return $post_id; }
    if(!current_user_can('edit_post', $post_id)) { return $post_id; }
 
    //前月＋当月＋2ヵ月分のmeta_keyを設定
    $keys1 = set_calendar_keys(date('Y'),date('n')-1);
    $keys2 = set_calendar_keys(date('Y'),date('n'));
    $keys3 = set_calendar_keys(date('Y'),date('n')+1);
    $keys4 = set_calendar_keys(date('Y'),date('n')+2);
    $keys = array_merge($keys1,$keys2,$keys3,$keys4);
 
    foreach( $keys as $key ) {
        $prev_data1 = get_post_meta($post_id, $key1, true);
        $prev_data2 = get_post_meta($post_id, $key2, true);
        $prev_datas = array($prev_data1,$prev_data2);
        if (get_post_meta($post_id, $key)) {
                delete_post_meta($post_id, $key);
        }

        foreach ($prev_datas as $keyname => $value) {
            $keytime = $key.'_'.$keyname;
            $data = $_POST[$keytime];

            if( $value == "" ){
                add_post_meta($post_id, $keytime, $data, true);
            } elseif( $data != $value && $data != "" ) {
                update_post_meta($post_id, $keytime, $data);
            } elseif( $data == "" ) {
                delete_post_meta($post_id, $keytime, $value);
            }
        }
        
    }
}
add_action('save_post', 'save_schedule');
//カスタムフィールド書き出し時のmeta_key設定
function set_calendar_keys($year,$month) {
    //前月、翌月、翌々月が年をまたぐ場合の処理
    if( $month > 12 ) { $year = $year+1; $month = $month-12; }
    elseif( !$month ) { $year = $year-1; $month = 12; }
    //月末日の取得
    $l_day = date('t', strtotime($year.sprintf('%02d',$month).'01'));
    //一ヶ月分のmeta_key（dateYYYYMMDD）を配列$keysに格納
    for ( $i=1; $i<=$l_day; $i++ ) {
        $keys[($i-1)] = 'date'.$year.sprintf('%02d',$month).sprintf('%02d',$i);
    }
    return $keys;
}
//カレンダーの祝日取得
function japan_holiday_ics($year) {
    // カレンダーID
    $calendar_id = urlencode('japanese__ja@holiday.calendar.google.com');
    $url = 'https://calendar.google.com/calendar/ical/'.$calendar_id.'/public/full.ics';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $result = curl_exec($ch);
    curl_close($ch);
    if (!empty($result)) {
        $items = $sort = array();
        $start = false;
        $count = 0;
        foreach(explode("\n", $result) as $row => $line) {
            // 1行目が「BEGIN:VCALENDAR」でなければ終了
            if (0 === $row && false === stristr($line, 'BEGIN:VCALENDAR')) {
                break;
            }
            // 改行などを削除
            $line = trim($line);
            // 「BEGIN:VEVENT」なら日付データの開始
            if (false !== stristr($line, 'BEGIN:VEVENT')) {
                $start = true;
            } elseif ($start) {
                // 「END:VEVENT」なら日付データの終了
                if (false !== stristr($line, 'END:VEVENT')) {
                    $start = false;
                    // 次のデータ用にカウントを追加
                    ++$count;
                } else {
                    // 配列がなければ作成
                    if (empty($items[$count])) {
                        $items[$count] = array('date' => null, 'title' => null);
                    }
                    // 「DTSTART;～」（対象日）の処理
                    if(0 === strpos($line, 'DTSTART;VALUE')) {
                        $date = explode(':', $line);
                        $date = end($date);
                        $items[$count]['date'] = $date;
                        // ソート用の配列にセット
                        $sort[$count] = $date;
                    }
                    // 「SUMMARY:～」（名称）の処理
                    elseif(0 === strpos($line, 'SUMMARY:')) {
                        list($title) = explode('/', substr($line, 8));
                        $items[$count]['title'] = trim($title);
                    }
                }
            }
        }
        // 日付でソート
        $items = array_combine($sort, $items);
        ksort($items);
        return $items;
    }
}
// 管理画面カレンダー生成
function output_cf_calendar($year,$month) {
    global $post;
 
    //翌月、翌々月が年をまたぐ場合
    if( $month > 12 ) { $year = $year+1; $month = $month-12; }
    //月末日の取得
    $l_day = date('t', strtotime($year.sprintf('%02d',$month).'01'));
    //月初日の曜日の取得
    $first_week = date('w',strtotime($year.sprintf('%02d',$month).'01'));
    //セレクトメニューオプション
    $menu_options = array('◯','△','▼','×','休');
    //祝日を取得
    $holidays = japan_holiday_ics(date('Y'));
 
    $calendar = <<<EOM
<table class="calendar">
    <caption>{$year}年{$month}月</caption>
    <tr>
        <th class="sun">日</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
        <th>土</th>
    </tr>
EOM;
    for( $i=1; $i<=$l_day+$first_week; $i++ ) {
        $day = $i-$first_week;
        if( $i%7 == 1 ) { $calendar .= '<tr>'."\n"; }
        if( $day <= 0 ) {
            $calendar .= '<td>&nbsp;</td>'."\n";
        } else {
            $key = 'date'.$year.sprintf('%02d',$month).sprintf('%02d',$day);
            $key1 = $key.'_0';
            $key2 = $key.'_1';
            $value1 = get_post_meta($post->ID, $key1, true);
            $value2 = get_post_meta($post->ID, $key2, true);
            $timestamp = mktime(0,0,0,$month,$day,$year);
            if( $timestamp == mktime(0,0,0,date('n'),date('j'),date('Y')) ) { $class=' class="today"'; }
            elseif( date('w',$timestamp) == 0 || date('w',$timestamp) == 1 ) {
                $class=' class="sun"';
            }
            elseif( !empty($holidays[date("Ymd", $timestamp)]) ) { $class=' class="holiday"'; }
            else { $class = ''; }
            $calendar .= '<td'.$class.'>';
            $calendar .= $day.'<br>';
            $calendar .= '<select name="'.$key1.'">';

            if ( date('w',$timestamp) == 0 || date('w',$timestamp) == 1 ) {
                $calendar .= '<option value="休" selected>休</option>';
                $calendar .= '</select>';
                $calendar .= '<select name="'.$key2.'">';
                $calendar .= '<option value="休" selected>休</option>';
            }else{
                foreach( $menu_options as $option ) {
                    if( $option == $value1 ) { $select = ' selected'; } else { $select = ''; }
                    $calendar .= '<option value="'.$option.'"'.$select.'>'.$option.'</option>';
                }
                $calendar .= '</select>';
                $calendar .= '<select name="'.$key2.'">';
                foreach( $menu_options as $option ) {
                    if( $option == $value2 ) { $select = ' selected'; } else { $select = ''; }
                    $calendar .= '<option value="'.$option.'"'.$select.'>'.$option.'</option>';
                }
            }
            $calendar .= '</select>';
            $calendar .= '</td>'."\n";
        }
    }
    if( $i%7 > 1 ) {
        for( $td=0; $td<=7-($i%7); $td++) {
            $calendar .= '<td>&nbsp;</td>'."\n";
        }
    }
    $calendar .= '</tr>'."\n";
    $calendar .= '</table>'."\n";
    return $calendar;
}
// 管理画面のカレンダー表示編集
function reservation_output_css() {
    $post_id = '';
    if(isset($_GET['post']) || isset($_POST['post_ID'])) {
        $post_id = $_GET['post'] ? $_GET['post'] : $_POST['post_ID'] ;
    }

    $page_reserve = get_page_by_path('y');
    $page_id = $page_reserve -> ID;  //スラッグが「news」の固定ページの ID

    // ID を比較して、合致すればメタボックスを追加
    if ($post_id == $page_id){
        $pt_reservation_css  = '<style type="text/css">';
        /*　カレンダー表示のカスタマイズ　*/
        $pt_reservation_css .= '#schedule .inside { text-align: center; }';
        $pt_reservation_css .= '#schedule table.calendar { border-collapse: collapse; border-spacing: 0; margin: 0 auto 20px; }';
        $pt_reservation_css .= '#schedule table.calendar caption { font-size: 150%; font-weight: bold; color: #999; padding: 5px 0; }';
        $pt_reservation_css .= '#schedule table.calendar tr th { border: solid 1px #ccc; padding: 3px; background: #666; color: #fff; }';
        $pt_reservation_css .= '#schedule table.calendar tr th.sun { background: #e66; }';
        $pt_reservation_css .= '#schedule table.calendar tr td { border: solid 1px #ccc; padding: 3px; text-align: left; }';
        $pt_reservation_css .= '#schedule table.calendar tr td.sun { background: #fee; }';
        $pt_reservation_css .= '#schedule table.calendar tr td.holiday { background: #fee; }';
        $pt_reservation_css .= '#schedule table.calendar tr td.today { background: #ffe; }';
        $pt_reservation_css .= '#schedule table.calendar tr td select { width: 4em; margin: 5px 10px; }';
        $pt_reservation_css .= '</style>';
        echo $pt_reservation_css;
    }
}
add_action('admin_head', 'reservation_output_css');
// カレンダー固定ページ表示（1月分）
function output_single_calendar($year,$month) {
    global $post;
 
    //翌月、翌々月が年をまたぐ場合
    if( $month > 12 ) { $year = $year+1; $month = $month-12; }
    //月末日の取得
    $l_day = date('t', strtotime($year.sprintf('%02d',$month).'01'));
    //月初日の曜日の取得
    $first_week = date('w',strtotime($year.sprintf('%02d',$month).'01'));
    //祝日を取得
    $holidays = japan_holiday_ics(date('Y'));
    
    $calendar = <<<EOM
<div class="calender_content"><table>
    <caption>{$year}年{$month}月</caption>
    <tr>
        <th class="sun">日</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
        <th>土</th>
    </tr>
EOM;
    /* calendar body start */
    for( $i=1; $i<=$l_day+$first_week; $i++ ) {
        $day = $i-$first_week;
        if( $i%7 == 1 ) { $calendar .= '<tr>'."\n"; }
        if( $day <= 0 ) {
            $calendar .= '<td>&nbsp;</td>'."\n";
        } else {
            $key = 'date'.$year.sprintf('%02d',$month).sprintf('%02d',$day);
            $timestamp = mktime(0,0,0,$month,$day,$year);
            if( $timestamp == mktime(0,0,0,date('n'),date('j'),date('Y')) ) { $class=' class="today"'; }
            elseif( date('w',$timestamp) == 0 || date('w',$timestamp) == 1 ) { $class=' class="sun"'; }
            elseif( !empty($holidays[date("Ymd", $timestamp)]) ) { $class=' class="holiday"'; }
            else { $class = ''; }
            $calendar .= '<td'.$class.'>';
                $calendar .= '<span class="day">'.$day.'</span>';
            
            for ($j=0; $j < 2 ; $j++) { 
                $keyname = $key.'_'.$j;
                $value = get_post_meta($post->ID, $keyname, true);
                if( $value == '休' ) { $value = '<span class="off">-</span>'; }
                elseif( !$value ) { $value = '<span class="undecided">-</span>'; }
                $calendar .= '<div class="tzone">'.$value.'</div>';
            }
            $calendar .= '</td>'."\n";
        }
    }
    if( $i%7 > 1 ) {
        for( $td=0; $td<=7-($i%7); $td++) {
            $calendar .= '<td>&nbsp;</td>'."\n";
        }
    }
    $calendar .= '</tr>'."\n";
    /* calendar body end   */
    $calendar .= '</table>'."\n";
    $calendar .= '<p class="summary">◯…予約可能　△…やや空きあり　▼…残りわずか　-,×…予約不可</p></div>'."\n";
    return $calendar;
}
// カレンダー全月分をショートコードに
function displayCalender() {
    // 現在の日付を設定
    $year    = date('Y');
    $month   = date('n');
    $day     = date('j');
    $date = mktime(0,0,0,$month,$day,$year);
    $today = $date;

    return '<div id="reserveCalender" class="main_calender">'.output_single_calendar($year,$month).output_single_calendar($year,$month+1).output_single_calendar($year,$month+2).output_single_calendar($year,$month+3).output_single_calendar($year,$month+4).'</div>';
}
add_shortcode('reservationCalender', 'displayCalender');
/*【ここまで】カスタム投稿とカスタムフィールドを使って予約状況を反映するカレンダーを作成*/
```

### enqueue_scriptへの追記内容

```php
//wp_enqueue_script/styleを使ったファイル読み込み
if (!is_admin()) {
    function deregister_script(){  //　登録解除の項目
        wp_deregister_script('jquery');
    }
    function register_files(){  //　登録の項目
        wp_register_script( 'slick', get_theme_file_uri() .'/lib/js/slick.min.js', array( 'jquery' ), '', true);
        wp_register_style( 'slick', get_theme_file_uri() .'/lib/css/slick.css', array(), '', false);
        wp_register_style( 'slick-theme', get_theme_file_uri() .'/lib/css/slick-theme.css', array(), '', false);
        wp_register_style( 'calender', get_theme_file_uri() .'/lib/css/calender.css', array(), '', false);
    }
    function add_files() {  // 装備の項目
        wp_enqueue_script('slick');
        wp_enqueue_style('slick');
        wp_enqueue_style('slick-theme');
        wp_enqueue_style('calender');
    }
    add_action('wp_enqueue_scripts', 'add_files');
}
```

### 独自CSS

```css
/*--------------------------------------------------
  予約状況
--------------------------------------------------*/
.post-type-archive-reservation  #main,
.single-reservation #main { width: auto; float: none; }
 
/* 個別ページ */
.main_calender .profile { overflow: hidden; }
.main_calender .profile img { float: left; margin: 0 20px 10px 0; }
.main_calender .profile .name small { font-size: 60%; color: #999; font-weight: normal; }
.main_calender .profile .course { font-size: 85.7%; margin-bottom: 10px; }
.main_calender .profile .introduction { margin: 0 0 30px 220px; }
 
.main_calender table { width: 100%; }
.main_calender table caption { font-size: 150%; font-weight: bold; color: #999; padding: 5px 0; }
.main_calender table tr th { border: solid 1px #ccc; padding: 3px; background: #666; color: #fff; text-align: center; }
.main_calender table tr th.sun { background: #e66; }
.main_calender table tr td { border: solid 1px #ccc; padding: .125rem .125rem .5rem .125rem ; text-align: center; line-height: 1.2; width: 14%; }
.main_calender table tr td.sun { background: #fee; }
.main_calender table tr td.holiday { background: #fee; }
.main_calender table tr td.today { background: #ffe; }
.main_calender table tr td span.day { display: block; text-align: left; color: #999; }
.main_calender table tr td span.off { font-size: 85.7%; color: #999; }
.main_calender table tr td span.undecided { font-size: 85.7%; color: #999; }
.main_calender td .tzone{padding:2.5% 0;margin: 0 10%;}
.main_calender td .tzone:nth-of-type(1){border-bottom: 1px solid #999;}
.main_calender .summary { margin: 3px 0 20px; text-align: right; }
 
.reservation-single .backToList { text-align: center; margin-bottom: 20px; }
.reservation-single .backToList a { display: inline-block; background: #999; color: #fff; padding: 0 10px; 
	font-size: 85.7%; line-height: 30px; font-weight: normal; 
	-webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; 
}

.main_calender {
  margin: 0 auto;
  padding: 0 1.5rem;
  width: calc(100% - 2rem);
  color: #333;
  background-color: #f7f7f7;
}
.calender_content {
  text-align: center;
}
.slick-dots{
	left: 0;
}
.slick-prev,.slick-next{
	width: 2rem;
	height: 2rem;
}
.slick-prev{
	left: 0;
}
.slick-next{
	right: 0;
}
.slick-prev:before, .slick-next:before{
	content: "";
	display: block;
	width: 100%;
	height: 100%;
	border: 1px solid #231f20;
	border-top-color:transparent; 
	border-right-color:transparent;
	transition: .3s;
}
.slick-prev:before{
	transform: rotateZ(45deg);
}
.slick-next:before{
	transform: rotateZ(-135deg);
}
```

## カスタムフィールド

```php
//固定ページにカスタムフィールド追加
$custom_fields = array(
    'ttl'=>array(
        'id'=>'item_title',
        'info'=>'タイトルを入力してください',
        'func'=>'createItem'
    ),
    'txt'=>array(
        'id'=>'item_text',
        'info'=>'概要を入力してください',
        'func'=>'createMedia'
    ),
);
add_action( 'admin_menu', 'add_custom_field' );
function add_custom_field() {
    global $custom_fields;
    foreach($custom_fields as $key => $member) {
        //add_meta_box(フィールドのID , フィールドのタイトル, 管理画面に出力する関数, 表示するページ, 管理画面に表示する場所, 管理画面に表示する優先順位, 謎（初期値null）);
        add_meta_box($key , $member['info'], $member['func'],'page', 'normal','high',$member['id']);
    }
}

// カスタムフィールドのinputタイプHTMLを追加
function createItem($output, $key){
    $keyname = $key["args"];
    global $post;
    // 保存されているカスタムフィールドの値を取得
    $get_value = get_post_meta( $post->ID, $keyname, true );

    // nonceの追加
    wp_nonce_field( 'action-' . $keyname, 'nonce-' . $keyname );

    // HTMLの出力
    echo '<input name="' . $keyname . '" value="' . $get_value . '" style="width:100%;">';
}
// カスタムフィールドのwpエディタタイプHTMLを追加
function createMedia($output, $key) {
    $keyname = $key["args"];
    global $post;
    // 保存されているカスタムフィールドの値を取得
    $get_value = get_post_meta( $post->ID, $keyname, true );

    // nonceの追加
    wp_nonce_field( 'action-' . $keyname, 'nonce-' . $keyname );

    // HTMLの出力
    wp_editor( $get_value, $keyname . '-box', ['textarea_name' => $keyname] );
}
// カスタムフィールドの保存
function save_custom_field( $post_id ) {
    global $custom_fields;

    foreach( $custom_fields as $key => $member ) {
        if ( isset( $_POST['nonce-' . $member['id']] ) && $_POST['nonce-' . $member['id']] ) {
            if( check_admin_referer( 'action-' . $member['id'], 'nonce-' . $member['id'] ) ) {

                if( isset( $_POST[$member['id']] ) && $_POST[$member['id']] ) {
                    update_post_meta( $post_id, $member['id'], $_POST[$member['id']] );
                } else {
                    delete_post_meta( $post_id, $member['id'], get_post_meta( $post_id, $member['id'], true ) );
                }
            }
        }
        
    }
}
add_action( 'save_post', 'save_custom_field' );
     

//カスタムフィールドwpエディタ表示用タグ許可
function excerpt_display($string){
    $allowed_html = array(
        'span'  => array(
            'class' => array()
        ),
    );
    return wp_kses( $string , $allowed_html);
}
```

## カスタム投稿タイプ

```php
// カスタム投稿タイプの追加
function create_post_type() {
    $Supports = array(  // supports のパラメータを設定する配列（初期値だと title と editor のみ投稿画面で使える）
        'title',  // 記事タイトル
        'editor',  // 記事本文
        'excerpt',//抜粋
        'revisions',  // リビジョン
        'thumbnail',  //サムネイル
        'custom-fields'
    );
    register_post_type(
    'member', // 投稿タイプ名の定義
    array(
        'labels' => array(
                    'name' => __( '加盟団体' ), // 表示する投稿タイプ名
                    'singular_name' => __( '加盟団体' )
                    ),
        'public' => true,// 投稿タイプをパブリックにするか否か
        'exclude_from_search' => false,//サイト内検索結果に含まない
        'has_archive' => true,//アーカイブを作成
        'menu_position' =>5,// 管理画面上でどこに配置するか今回の場合は「投稿」の下に配置
        'supports' => $Supports // 投稿画面でどのmoduleを使うか的な設定
        )
    );

    register_taxonomy(
      'member_taxonomy',  // 追加するタクソノミー名（英小文字とアンダースコアのみ）
      'member',  // どのカスタム投稿タイプに追加するか
      array(
        'label' => '団体区分',  // 管理画面上に表示される名前（投稿で言うカテゴリー）
        'labels' => array(
          'all_items' => '団体区分一覧',  // 投稿画面の右カラムに表示されるテキスト（投稿で言うカテゴリー一覧）
          'add_new_item' => '新規団体区分を追加',  // 投稿画面の右カラムに表示されるカテゴリ追加リンク
          'show_ui' => true
        ),
        'hierarchical' => true,
      )
    );

    register_taxonomy(
      'pref_taxonomy',  // 追加するタクソノミー名（英小文字とアンダースコアのみ）
      'member',  // どのカスタム投稿タイプに追加するか
      array(
        'label' => '都道府県',  // 管理画面上に表示される名前（投稿で言うカテゴリー）
        'labels' => array(
          'all_items' => '都道府県一覧',  // 投稿画面の右カラムに表示されるテキスト（投稿で言うカテゴリー一覧）
          'add_new_item' => '新規都道府県を追加',  // 投稿画面の右カラムに表示されるカテゴリ追加リンク
          'show_ui' => true
        ),
        'hierarchical' => true,
      )
    );
}
add_action( 'init', 'create_post_type' );
```

## 投稿のカテゴリー選択をラジオボタンに変更

```php
function change_category_to_radio() {
?>
<script>
jQuery(function($) {
    $('#categorychecklist input[type=checkbox]').each(function() {
        $(this).replaceWith($(this).clone().attr('type', 'radio'));
    });
    // 「新規カテゴリーを追加」を非表示
    $('#category-adder').hide();
    // 「よく使うもの」を非表示
    $('#category-tabs').hide();
});
</script>
<?php
}
add_action( 'admin_head-post-new.php', 'change_category_to_radio' );
add_action( 'admin_head-post.php', 'change_category_to_radio' );
```

## 関数をショートコード化

記事内で使う場合は`[ショートコード名]`  
phpファイル内で使う場合は`echo do_shortcode('[ショートコード名]');`  

```php
add_shortcode("ショートコード名", "関数名");
```

## ターム(&カスタムタクソノミー)のリンクを取得

使い方：取得したい場所でショートコードを実行  

```php
function custom_taxonomies_terms_links($atts, $content = null ) {
    extract(shortcode_atts(array(
      "full" => false,
    ), $atts));
  // その投稿から投稿タイプを取得
  $post_type = 'member';

  // その投稿タイプからタクソノミーを取得
  $taxonomies = get_object_taxonomies( $post_type, 'objects' );

  $out = array();
  if ($full) {
      foreach ( $taxonomies as $taxonomy_slug => $taxonomy ){

        // 全てのタームを取得
        $terms = get_terms( $taxonomy_slug );

        if ( $terms ) {
          $out[] = '<h3>' . $taxonomy->label . 'で探す</h3><ul>';
          foreach ( $terms as $term ) {
            $out[] = '<li><a href="'.get_term_link($term).'" class="main_link">'.$term->name.'</a></li>';
          }
          $out[] = "</ul>\n";
        }
      }
  }else{
      foreach ( $taxonomies as $taxonomy_slug => $taxonomy ){

        // 投稿に付けられたタームを取得
        $terms = get_the_terms( $post->ID, $taxonomy_slug );

        if ($terms) {
          $out[] = "<ul><li><h6>" . $taxonomy->label . " : </h6></li>";
          foreach ( $terms as $term ) {
            $out[] = '<li><a href="'.get_term_link( $term->slug, $taxonomy_slug ).'" class="main_link">'.$term->name."</a></li>\n";
          }
          $out[] = "</ul>\n";
        }
      }
  }

  return implode('', $out );
}
add_shortcode("getTaxonomyLinks", "custom_taxonomies_terms_links");
```

## ショートコードで投稿記事一覧呼び出し

記事（the_content）内で呼び出したい場合や、singular.phpで関連記事を呼ぶ場合に便利  
content.phpにパーツを作っておくこと、投稿はカテゴリを付けていることが条件(適時変更して使うべし)  

```php
function getCatItems($atts, $content = null ) {
    extract(shortcode_atts(array(
      "num" => '5',
      "cat" => 'Uncategorized',
      "order"=> 'date',
      "type"=> 'post',
      "parent"=> null,
      "taxonomy"=>'member_taxonomy',
      "term"=> 'marriage-agency'
    ), $atts));
    
    // 処理中のpost変数をoldpost変数に退避
    global $post;
    $oldpost = $post;
    
    // カテゴリーの記事データ取得
    $catid=get_cat_ID($cat);
    $div_class ="";
    switch (true) {
        case $type === 'post':
            $args = array(
                'posts_per_page'   => $num,
                'category'         => $catid,
                'orderby'          => $order,
                'post_type'        => $type,
                'post_parent'      => $parent,
                'post_status'      => 'publish',
            );
            $div_class ="main_content columns link single";
            break;

        case $type === 'page':
            $args = array(
                'posts_per_page'   => $num,
                'orderby'          => $order,
                'post_type'        => $type,
                'post_parent'      => $parent,
                'post_status'      => 'publish',
            );
            $div_class ="main_content columns link page";
            break;
        default:
            break;
    }
    
    $posts = get_posts($args);
    
    ob_start();
    if($posts) {
        // 記事がある場合↓
        echo '<div class="'.$div_class.'">';
        // 取得した記事の個数分繰り返す
        foreach($posts as $post) :
             get_template_part('content');
        endforeach;
        
        echo '</div>';
    } else {
        // 記事がない場合↓
        echo '<p>記事がありません</p>';
    }
    
    return ob_get_clean();
    // oldpost変数をpost変数に戻す
    $post = $oldpost;
    
}
// 呼び出しの指定
add_shortcode("getCategoryArticle", "getCatItems");
```

singular.phpで効率的に回す方法

```php
$metas = array();
if(is_single()){
    $metas = array(
        'number' => 6,
        'type' => 'post',
        'parent'=> '',
    );
}else{
    $metas = array(
        'number' => 3,
        'type' => 'page',
        'parent'=> $post->post_parent,
    );
}

$catid = "";
foreach(( get_the_category($post->ID) ) as $cat) {
    $catid = $cat->cat_ID ;
    break ;
}
echo do_shortcode('[getCategoryArticle num="'.$metas["number"].'" cat="'.$catid.'" order="rand" type="'.$metas["type"].'" parent="'.$metas["parent"].'"]'); 
```

## 

```php
```