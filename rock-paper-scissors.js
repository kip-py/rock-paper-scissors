function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return "rock"
    }
    else if (num === 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    return window.prompt("rock, paper, or scissors?")
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        let humanChoiceLower = humanChoice.toLowerCase()
        if (humanChoiceLower === "rock") {
            if (computerChoice === "rock") {
                console.log("Tie!")
            }
            else if (computerChoice === "paper"){
                console.log("you lose! " + computerChoice + " beats " + humanChoiceLower + ".")
                computerScore ++
            }
            else {
                console.log("you win! " + humanChoiceLower + " beats "+ computerChoice +" .")
                humanScore ++
            }
        }
        else if (humanChoiceLower === "scissors") {
            if (computerChoice === "scissors") {
                console.log("Tie!")
            }
            else if (computerChoice === "rock"){
                console.log("you lose! " + computerChoice + " beats " + humanChoiceLower + ".")
                computerScore ++
            }
            else {
                console.log("you win! " + humanChoiceLower + " beats "+ computerChoice +" .")
                humanScore ++
            }
        }
        else {
            if (computerChoice === "paper") {
                console.log("Tie!")
            }
            else if (computerChoice === "scissors"){
                console.log("you lose! " + computerChoice + " beats " + humanChoiceLower + ".")
                computerScore ++
            }
            else {
                console.log("you win! " + humanChoiceLower + " beats "+ computerChoice +" .")
                humanScore ++
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log("player: " + humanScore + ", computer: " + computerScore)
    }
}

playGame()