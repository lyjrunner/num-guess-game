//랜덤번호 지정
//유저의 번호 입력 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞출시, 맞췄습니다
//랜덤번호가 < 유저번호 down!!
//랜덤번호가 > 유저번호 up!!
//reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다(더이상 추측불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 입력한 숫자를 또입력하면, 알려준다, 기회를 깎지 않는다.
let comnumber = 0;
let playbutton = document.getElementById("play-button");
let userinput = document.getElementById("user-input");
let resultarea = document.getElementById("result-area");
let resetbutton = document.getElementById("reset-button");
let chances = 5;
let gameover=false;
let chancearea = document.getElementById("chance-area");
let history=[];

userinput.addEventListener("click", function(){userinput.value=""});
playbutton.addEventListener("click", start);
resetbutton.addEventListener("click", reset);


function randomnumber(){
    comnumber = Math.floor(Math.random()*(100)+1);
    console.log("정답",comnumber);
}

function start(){
    let uservalue = userinput.value;

    if(uservalue<1 || uservalue>100){
        resultarea.textContent="1과 100사이 숫자를 입력해주세요";
        return; 
    }
    if(history.includes(userinput.value)){
        resultarea.textContent=`중복된 숫자입니다.(${history})`;
        return; 
    }

    chances --;
    chancearea.textContent=`남은 기회는 ${chances}번`;
    if(uservalue < comnumber){
        resultarea.textContent="up";
    }
    else if(uservalue > comnumber){
        resultarea.textContent="down";
    }else
    {
        resultarea.textContent="정답입니다^^"
    } 

    history.push(userinput.value)
    console.log(history)

    if(chances<1){
        gameover=true
    }
    if(gameover==true){
        playbutton.disabled = true
        resultarea.textContent= `틀렸습니다 정답은 ${comnumber}입니다`  // 보완할점
    }
}

function reset(){
    document.location.reload();

  
}

randomnumber();