const emojiHappy = ["&#128525", "&#128514", "&#128517", "&#128515", "&#128519"];
const emojiSad = ["&#128527", "&#128530", "&#128549", "&#128531", "&#128534"];
const Game = document.querySelector(".game");
const Game2 = document.querySelector("#game2");
const Game3 = document.querySelector("#game3");
const btnStart = document.querySelector(".start");
const btnLevels = document.querySelectorAll(".btnLevels");
const PResult =  document.querySelector(".p");
const finalResult = document.querySelector("#finalResult");
const Input = document.querySelector('.input');
const pTimer = document.querySelector('.pTimer');
const pTimerEnvers = document.querySelector('.pTimerEnvers');
const JooOn = document.querySelector('.jooOn');
const btnReset = document.querySelector('.reset');


let i = 5; 
let num1 = 0;
let count = 0;
let countInverse = 10;
let timer = null;
let result = null;


setInterval(() => {
  btnStart.classList.toggle("toggle")
}, 900);

function chooseLevel(x){
    switch (x) {
      case "1":
        return (PResult.innerHTML = "guess a number between 1 and 20");
      case "2":
        return (PResult.innerText = "guess a number between 1 and 30");
      case "3":
        return (PResult.innerText = "guess a number between 1 and 50");
    }
}

function Start(){
  Game.classList.toggle("toggle");
  Game2.classList.toggle("toggle");
}

function RandomNum(x){ 
    switch (x) {
      case "1":
        return (  Math.floor(Math.random() * 19) + 1);
      case "2":
        return (  Math.floor(Math.random() * 29) + 1);
      case "3":
        return (  Math.floor(Math.random() * 49) + 1);
    }
}

function Stop(){
    Input.disabled = true ;
    pTimer.innerHTML = "";
    clearInterval(timer);
    count = 0;
}

function Timer(){
     Input .focus();
      timer = setInterval(() => {
      pTimer.innerHTML = "30 : " + count + " s";
      count += 1;
      if(count>24){
        pTimer.innerHTML = 30 - count ;
        pTimer.style.color = "red";
      }
      if (count >= 30) { 
        Stop();
      }
   }, 1000);  
}

function Reset(){
  Game3.classList.toggle("toggle");
  Game2.classList.toggle("toggle");
  Stop();
  finalResult.innerHTML = "";
  finalResult.classList.remove("win");
  Input .focus();
  Input.disabled = false ;
  JooOn.innerHTML = "";
  i=5;
  pTimer.style.color = "white";
}
       

btnLevels.forEach((item) => {
  item.addEventListener('click', (e) => {
    Game2.classList.toggle("toggle");
    Game3.classList.toggle("toggle");
    const x = e.target.innerHTML;
        chooseLevel(x);
        Timer();
        num1 = RandomNum(x);
        console.log(num1);
  });
});


 Input.addEventListener('change', (event) => {
    i -= 1;
        if (i === 0) {
          finalResult.classList.add('win');
          result = "you failed  " + emojiSad[4];
          Stop();
        }
         else if (event.target.value == num1) {
          finalResult.classList.add('win');
          result = "Wwwiiinnn!  " + emojiHappy[i];
          Stop();
        } 
        else if (event.target.value > num1) {
          result = "bigger  " + emojiSad[4 - i];
          JooOn.innerHTML = "&#11088".repeat(i);
        }
         else {
          result = "smaller  " + emojiSad[4 - i];
          JooOn.innerHTML = "&#11088".repeat(i);
        }
        finalResult.innerHTML = result;
        event.target.value = "";
      });

      
 
      


