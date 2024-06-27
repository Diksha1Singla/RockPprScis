//error : how to end game 
// check function to call at last ??










let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoiceID = choice.getAttribute("id");
        playGame(userchoiceID);
    });
});

const getcompChoice = () => {
    const availChoices = ["rock", "paper", "scissors"];
    let indx = Math.floor(Math.random() * 3);
    const compchoiceID = availChoices[indx];
    return compchoiceID;
}

const playGame = (userchoiceID) => {
    console.log("user Choice = ", userchoiceID);
    const compChoiceID = getcompChoice();
    console.log("Computer Choice = ", compChoiceID);
    CheckOutput(userchoiceID, compChoiceID);
}

const CheckOutput = (userchoiceID, compChoiceID) => {
    if (compChoiceID == userchoiceID) {
        window.alert("Draw!Try Again");
        console.log("Match Draw!Try Again")
        msg.innerText = `Your choice : ${userchoiceID} , Computer choice : ${compChoiceID}  
        Match Draw!Try Again`;
        msg.style.backgroundColor = "Yellow";
        msg.style.color = "Black";
        // check();
    } else {
        Res2(userchoiceID, compChoiceID);
        // check();
    }

}

function check() {

    wantToEndGame = prompt("Want To End Game ??");
    if (wantToEndGame.toUpperCase() == "YES") {
        ENDGAME(userScore, compScore);
    }
}

const Res2 = (userchoiceID, compChoiceID) => {

    let userWin = true;

    if (userchoiceID == "rock") {
        userWin = compChoiceID == "paper" ? false : true;
    } else if (userchoiceID == "paper") {
        userWin = compChoiceID == "scissor" ? false : true;
    } else if (userchoiceID == "scissor") {
        userWin = compChoiceID == "rock" ? false : true;
    }
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!")
        msg.innerText = `Your choice : ${userchoiceID} , Computer choice : ${compChoiceID}  
    You Win!`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose!Try Again");
        msg.innerText = `Your choice : ${userchoiceID} , Computer choice : ${compChoiceID}  
    You Lose!Try Again`;
        msg.style.backgroundColor = "Red";
    }
}



function ENDGAME(userScore, compScore) {
    if (compScore > userScore) {
        document.write(`Your Score = ${userScore} ; computer Score = ${compScore}
            Game Over ! Computer Win !!`);
    } else if (compScore < userScore) {
        document.write(`Your Score = ${userScore} ; computer Score = ${compScore}
            Game Over ! You Win !!`);
    } else {
        document.write(`Your Score = ${userScore} ; computer Score = ${compScore}
            Game Over ! Match Draw !!`);
    }
}