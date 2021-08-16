$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    let speed = 400; // ミリ秒で記述
    let href= $(this).attr("href");//thisの中に入っているhref属性の値をattrメソッドで取得しています。
    //三項演算子では、href が#と同じ値であるか、もしくは、 href が “” と同じ値である場合、htmlを変数targetに代入します。
    //そうでない場合は、hrefを変数targetに代入するという処理です。
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;//変数positionに、 target.offset().topで対象先の縦の位置を取得して代入しています。
    $('body,html').animate({scrollTop:position}, speed, 'swing');//HTML全体にpositionで指定した位置、speedで指定した速度で、swingという動作を利用して、アニメーション表示で画面の上部まで移動する処理を実装しています。
    return false;//リンク先に遷移するのを防ぐための処理
  });
});