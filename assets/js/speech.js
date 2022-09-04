// ここから10個のテーマ配列
'use strict';

let themes = [
  "① 仲間の居場所つくらずして自分の居場所なし",
  "② ふりかえり主義",
  "③ インサイドアウト",
  "④ 理解してから理解される",
  "⑤ 深掘り力は人格力",
  "⑥ 嘘をつかない誤魔化さない",
  "⑦ 教えることは教わること",
  "⑧「ベンチ行かない？」と言う勇気",
  "⑨ 本音の対話なくして最高のチームなし",
  "⑩ 自ら機会を創り出し、機会によって自らを変えよ",
];



// const speech = document.getElementById('mainContent');


// for (let i = 0; i < themes.length; i++) {
  // speech.innerHTML += '<div class="main-theme" id="mainTheme"><p>' + themes[i] + '</p></div>';
//   document.getElementById("mainSpeechInner").style.display ="none";
//   function clickBtn1(){
//     const mainSpeechInner = document.getElementById("mainSpeechInner");
//     if(mainSpeechInner.style.display=="block"){
//         mainSpeechInner.style.display ="none";
//     }else{mainSpeechInner.style.display ="block";
//     }
//   }
// document.getElementById(`themes-` + i).onclick = function()  {
//     mainTheme.style.backgroundColor ="#EFF2F5"
//     };
// };

// let mainTheme = document.getElementById(mainTheme)


// document.getElementById(mainContent).onclick = function()  {
//     mainTheme.style.backgroundColor ="#EFF2F5"
//     };

let ele = document.getElementById(`mainSpeech`);
document.getElementById(`mainTheme`).onclick = () =>{
  if(ele.style.display==='none'){
    ele.style.display = 'block';
  }else{
    ele.style.display = 'none';
  }
}

