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