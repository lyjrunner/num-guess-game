//랜덤번호 지정
//유저의 번호 입력 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞출시, 맞췄습니다
//랜덤번호가 < 유저번호 down!!
//랜덤번호가 > 유저번호 up!!
//reset버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다(더이상 추측불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 입력한 숫자를 또입력하면, 알려준다, 기회를 깎지 않는다.

let computernum = 0;
let playbutton = document.getElementById("play-button");
let userinput = document.getElementById("user-input");
let resultarea = document.getElementById("result-area");
playbutton.addEventListener("click",play);

function pickrandomnum(){
    computernum = Math.floor(Math.random()*100)+1;
    console.log("정답",computernum);
}

function play(){
    let userValue = userinput.value;
    console.log(userValue);
    if(userValue < computernum){
        resultarea.textContent ="Down!"
        console.log("Down!")
    }
    else if(userValue > computernum){
        resultarea.textContent ="Up"
        console.log("Up")
    }
    else if(userValue = computernum){
        resultarea.textContent ="정답입니다!!"
        console.log("정답입니다!!")
    }

}

pickrandomnum();