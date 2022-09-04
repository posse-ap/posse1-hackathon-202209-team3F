"use strict"

const picture7Array = ["assets/img/birthday-itsuki.jpeg", 'assets/img/posseロゴ-removebg-preview.png'];
let num = -1;

function slideShow() {
    if (num === 1) {
        num = 0;
    } else {
        num++;
    }
    document.getElementById("slideImg7").src = picture7Array[num];
}
setInterval(slideShow, 500);




const picture8Array = ["assets/img/birthday-itsuki.jpeg", 'assets/img/posseロゴ-removebg-preview.png'];


let num8 = -1;



function slideShow8() {
    if (num === 1) {
        num8 = 0;
    } else {
        num8++;
    }
    document.getElementById("slideImg8").src = picture8Array[num8];
}


setInterval(slideShow8, 500);

const picture9Array = ["assets/img/birthday-itsuki.jpeg", 'assets/img/posseロゴ-removebg-preview.png'];


let num9 = -1;



function slideShow9() {
    if (num === 1) {
        num9 = 0;
    } else {
        num9++;
    }
    document.getElementById("slideImg9").src = picture9Array[num9];
}


setInterval(slideShow9, 500);


// const picture9Array = ["assets/img/birthday-itsuki.jpeg", 'assets/img/posseロゴ-removebg-preview.png', "assets/img/birthday-itsuki.jpeg", ];


// let num9 = -1;

// function slideShow9() {
//     if (num === 2) {
//         num9 = 0;
//     } else {
//         num9++;
//     }
//     document.getElementById("slideImg9").src = picture9Array[num9];
// }

// setInterval(slideShow9, 300);




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





const ALL_YEAR = [{
        id: 1,
        when: "2022",
        answers: ["約28万人", "約79万人", "約183万人"],
        correctNumber: 1,
        href: "経済産業省 2019年3月 － IT 人材需給に関する調査",
    },
    {
        id: 2,
        when: '2021',
        answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
        correctNumber: 2,
    },
    {
        id: 3,
        when: '2020',
        answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
        correctNumber: 0,
    },
];
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