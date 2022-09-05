"use strict"



const picture1Array = ["assets/img/birthday-kazuki.jpg", 'assets/img/birthday-mkp.png', "assets/img/image.png", 'assets/img/posselogo-removebg-preview.png'];
let num = -1;

function slideShow1() {
    if (num === 3) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById("slideImg1").src = picture1Array[num];
}
setInterval(slideShow1, 500);

const picture2Array = ["assets/img/birthday-mrp.png", 'assets/img/posselogo-removebg-preview.png', "assets/img/kamokamo.png", "assets/img/birthday-yoshitaka.png"];


let num2 = -1;



function slideShow2() {
    if (num2 === 3) {
        num2 = 0;
    } else {
        num2++;
    }
    document.getElementById("slideImg2").src = picture2Array[num2];
}


setInterval(slideShow2, 500);

const picture3Array = ["assets/img/birthday-yukiho.png", 'assets/img/posselogo-removebg-preview.png', "assets/img/birthday-daiki.jpg", "assets/img/birthday-itsuki.png", "assets/img/birthday-iroha.png", "assets/img/birthday-narumiu.png"];


let num3 = -1;

function slideShow3() {
    if (num3 === 4) {
        num3 = 0;
    } else {
        num3++;
    }
    document.getElementById("slideImg3").src = picture3Array[num3];
}


setInterval(slideShow3, 300);

const picture4Array = ['assets/img/posselogo-removebg-preview.png', "assets/img/birthday-narumiu.png", "assets/img/birthday-yohei.jpg"];


let num4 = -1;

function slideShow4() {
    if (num4 === 2) {
        num4 = 0;
    } else {
        num4++;
    }
    document.getElementById("slideImg4").src = picture4Array[num4];
}


setInterval(slideShow4, 300);








let ALL_YEAR = []
const birthdayDate =
    document.getElementById(`birthdaydate`);


// for (let i = 4; i < 0; i--) {
//     const tab =
//         document.getElementById(`tab`);
//     tab.innerHTML = `< li > < a href = "
//     #202${i- 1}" id= "year202${i- 1} class="
//     main - year "></a></li>`
//     for (let j = 0; j < 4; j++) {
//         birthdayDate.innerHTML = ` < ul class = "main-box-inner" > `
//         ` < li class = "main-month-box" > `
//         ` < button class = "main-month" > $ {
//         [j + 1] } + "月" < /button>`
//         ` <figure class="main-month-img">
//         <img src="assets/img/posseロゴ-removebg-preview.png" width="100%" id="slideimg${i+7}">
//     </figure>`


//     }
// }




let text1 = document.createElement("p");
text1.innerHTML = "2023";
let x = document.getElementById("year2023");
x.appendChild(text1);

let text2 = document.createElement("p");
text2.innerHTML = "2022";
let y = document.getElementById("year2022");
y.appendChild(text2);

let text3 = document.createElement("p");
text3.innerHTML = "2021";
let w = document.getElementById("year2021");
w.appendChild(text3);

let text4 = document.createElement("p");
text4.innerHTML = "2020";
let z = document.getElementById("year2020");
z.appendChild(text4);






// $('.main-box-inner').slick({
//     autoplay: true, //自動的に動き出すか。初期値はfalse。
//     infinite: true, //スライドをループさせるかどうか。初期値はtrue。
//     speed: 500, //スライドのスピード。初期値は300。
//     slidesToShow: 3, //スライドを画面に3枚見せる
//     slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
//     prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
//     nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
//     centerMode: true, //要素を中央ぞろえにする
//     variableWidth: true, //幅の違う画像の高さを揃えて表示
//     dots: true, //下部ドットナビゲーションの表示
// });







// {
//     if (counter < picture7Array.length) {
//         document.getElementById('pics').src = picture7Array[counter].src;
//         // document.getElementById('pic-title').innerHTML = picArray[counter].title;
//         counter++;
//     } else {
//         document.getElementById('pics').src = picture7Array[0].src;
//         // document.getElementById('pic-title').innerHTML = picArray[0].title;
//         counter = 1;
//     }
// }


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
    document.getElementById("year2022")
});



const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);

// 初期表示
window.onload = function() {
    showProcess(today, calendar);
};
// 前の月表示
function prev() {
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}

// 次の月表示
function next() {
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    document.querySelector('#header').innerHTML = year + "年 " + (month + 1) + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if (year == today.getFullYear() &&
                    month == (today.getMonth()) &&
                    count == today.getDate()) {
                    calendar += "<td class='today'>" + count + "</td>";
                } else {
                    calendar += "<td>" + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}



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











// <
// li >
//     <
//     button id = "modalOpen2"
// class = "button information2" > イベント登録はこちら！ < /button> <
// div id = "easyModal2"
// class = "modal" >
//     <
//     div class = "modal-content" >
//     <
//     div class = "modal-header" >
//     <
//     h1 > posseイベントお知らせ🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉 < /h1> <
// span class = "modalClose2" > × < /span> < /
//     div > <
//     div class = "modal-body" >
//     <
//     p > 現在ハッカソン開催中！ < /p> <
// p > 9 月15日より 巻き返し合宿スタート！! < /p> <
// a href = "https://event.posse-ap.com/" > スケジュール登録はこちら！ < /a> < /
//     div > <
//     /div> < /
//     div > <
//     /li>