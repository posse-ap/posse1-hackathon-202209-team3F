"use strict"

//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
    if (hashIDName) {
        //タブ設定
        $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
            var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得
            if (idName == hashIDName) { //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
                var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
                $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
                $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
                //表示させるエリア設定
                $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
                $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
            }
        });
    }
}

//タブをクリックしたら
$('.tab a').on('click', function() {
    var idName = $(this).attr('href'); //タブ内のリンク名を取得
    GethashID(idName); //設定したタブの読み込みと
    return false; //aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function() {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
    var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
    GethashID(hashName); //設定したタブの読み込み
});


// スライドショー作成
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
});


$(document).ready(function() {
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-light'
    });
});




const buttonOpen = document.getElementById('modalOpen');
// const buttonOpen2 = document.getElementById('modalOpen2');
const modal = document.getElementById('easyModal');
// const modal2 = document.getElementById('easyModal2');
const buttonClose = document.getElementsByClassName('modalClose')[0];
// const buttonClose2 = document.getElementsByClassName('modalClose2')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
// buttonOpen2.addEventListener('click', modalOpen);

function modalOpen() {
    modal.style.display = 'block';
}

// function modalOpen() {
//     modal2.style.display = 'block';
// }

// バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
// buttonClose2.addEventListener('click', modalClose);

function modalClose() {
    modal.style.display = 'none';
}

// function modalClose() {
//     modal2.style.display = 'none';
// }

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);

function outsideClose(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// function outsideClose(e) {
//     if (e.target == modal2) {
//         modal2.style.display = 'none';
//     }
// }

$(".hamburger").click(function() { //ボタンがクリックされたら
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $(".hamburger-content").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
});

$(".hamburger-content a").click(function() { //ナビゲーションのリンクがクリックされたら
    $(".hamburger").removeClass('active'); //ボタンの activeクラスを除去し
    $(".hamburger-content").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスも除去
});