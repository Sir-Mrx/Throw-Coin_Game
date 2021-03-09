PlayerName = prompt("Hello Player Please Enter your name :")
const coinArray = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);
for (let num = 0; num < buttons.length; num++) {
    console.log(buttons[num]);
    buttons[i].addEventListener("click", tossCoin);
}
function tossCoin(e) {
    let playerGuess = e.target.innerText;
    let computerToss = Math.floor(Math.random() * 2);
    let computerGuess = coinArray[computerToss];
    message.innerHTML(`Computer Selected ==> ${computerGuess}`);
    let output;
    if (playerGuess === computerGuess) {
        output = ` Player ${PlayerName} win .`;
        score[0]++;
    }
    else {
        output = " Computer win .";
        score[1]++;
    }
    message.innerHTML += output + `<br/> Player : ${score[0]}---Computer : ${score[1]}`;
}
tossCoin();


