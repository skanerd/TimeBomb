
const Timer=document.getElementById('Timer');
let time= 60000;
let min=1;
let sec=60;
Timer.value=min+":"+'00'; 

function TIMER(){
    PlAYTIME=setInterval(function(){
        time = time - 1000;
        min = time / (60 * 1000);
        if(sec > 0){ 
            sec = sec - 1;
            Timer.value=Math.floor(min)+':'+sec; 
        } if(sec === 0){
            sec = 60;
            Timer.value=Math.floor(min)+':'+'00'
            location.href = "https://www.google.com/search?q=%E3%83%9E%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3%E7%81%AB%E4%BA%8B&tbm=isch&ved=2ahUKEwio6ZyOk9r7AhUODpQKHfx_CbAQ2-cCegQIABAA&oq=%E3%83%9E%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%B3%E7%81%AB%E4%BA%8B&gs_lcp=CgNpbWcQAzoECCMQJzoFCAAQgAQ6BwgjEOoCECc6BAgAEB46BggAEAUQHlD1A1jAKmD7MGgCcAB4AYAB8QGIAdENkgEGMTMuNC4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQrAAQE&sclient=img&ei=DoaJY6iqEI6c0AT8_6WACw&bih=986&biw=1800&rlz=1C5CHFA_enJP1001JP1001";
        } 
    },1000);
}
    TIMER();



var currentAnswer = 1;
var question;
var answer;
var btnAnswer;
var playerAnswer; //answer.valueを入れるための変数
// クイズ
var quiz_01 = "37 / 5 = ?";
var quiz_02 = "12 * 2 - 48 / 12 = ?";
// 正解
var correct_01 = "7.4";
var correct_02 = "20";

function btnClick() {

switch (currentAnswer) {
    case 1:
        playerAnswer = answer.value; //正解確認
        if (playerAnswer == correct_01) {
            alert("運がいいやつだな。。。");
        } else {
            alert("みろ！人がゴミのようだ！");
            location.href = "https://www.google.com/search?q=%E3%83%A0%E3%82%B9%E3%82%AB%E5%A4%A7%E4%BD%90%E3%80%80%E6%9C%80%E5%BE%8C&tbm=isch&ved=2ahUKEwib6pzRktr7AhX30YsBHcQBBggQ2-cCegQIABAA&oq=%E3%83%A0%E3%82%B9%E3%82%AB%E5%A4%A7%E4%BD%90%E3%80%80%E6%9C%80%E5%BE%8C&gs_lcp=CgNpbWcQAzoECCMQJzoGCAAQBxAeOgQIABAeUL8CWKciYPokaAdwAHgAgAFliAHcCJIBBDEyLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=joWJY5vrFPejr7wPxIOYQA&bih=986&biw=1800&rlz=1C5CHFA_enJP1001JP1001";
        }
        // 問題２を出す
        question.innerHTML = quiz_02;
        
        break;

    case 2:
        playerAnswer = answer.value; //正解確認
        if (playerAnswer == correct_02) {
            alert("脱出だ！！！");
            alert("あれ。。？俺の家は。。？");
            location.href = "https://www.google.com/search?q=%E3%81%93%E3%81%98%E3%81%8D&tbm=isch&ved=2ahUKEwjGzK6rkdr7AhXlw4sBHR9YDDwQ2-cCegQIABAA&oq=%E3%81%93%E3%81%98%E3%81%8D&gs_lcp=CgNpbWcQAzIECAAQHjIECAAQHjIECAAQHjIECAAQHjIGCAAQBRAeMgYIABAFEB4yBggAEAUQHjoECCMQJzoFCAAQgARQ6TNYoTpgq0hoAHAAeACAAVqIAa4EkgEBN5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=MoSJY8brHuWHr7wPn7Cx4AM&bih=986&biw=1800&rlz=1C5CHFA_enJP1001JP1001";
        } else {
            alert("このまま肉になるがいい🤗");
            location.href = "https://www.google.com/search?q=%E7%88%86%E7%99%BA&rlz=1C5CHFA_enJP1001JP1001&sxsrf=ALiCzsZFOiMbH7diGvuW1NRtiR5e45ADqA:1668153029171&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiyhfCl0qX7AhXQFogKHZ1uA2IQ_AUoAXoECAIQAw&biw=1097&bih=1180&dpr=0.8";
        }
            break;
    }
    currentAnswer = currentAnswer + 1;
};

window.onload = function () {
question = document.getElementById("quiz");
answer = document.getElementById("answer");
btnAnswer = document.getElementById("btn_answer");
btnAnswer.onclick = btnClick;
question.innerHTML = quiz_01; 
};


