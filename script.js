console.log("First to five wins!");
//game();
function game() { 
    let player = 0; 
    let computer = 0;
    while (player < 5 && computer < 5) { 
        let playerselection = prompt("rock, paper, or scissors: ")
        let computerselection= getComputerChoice();
        console.log(`You picked: ${playerselection}.\nComputer picked: ${computerselection}. \n `);
        let result = playround(playerselection,computerselection);
        if (result == "You Win!") { 
            console.log("You Win");
            player++; 
        }
        else if (result == "You Lose.") { 
            console.log("You Lose.");
            computer++;
        }
        else if (result == "It's a tie.") { 
            console.log("It's a tie.");
        }
        console.log("Score: " + player + "-" + computer);
    }
    console.log(`Final result is: \n ${player}    ||    ${computer}`);
    if (player == 5 ) { 
        console.log("Congratulations you won!");
    } 
    else if (computer == 5 ) { 
        console.log("Sorry, you lost.");
    }
}

function playround(playerselection, computerselection) { 
    if(playerselection == "rock" || playerselection == "Rock" || playerselection == "ROCK") { 
        if ( computerselection == "rock") { 
            return "It's a tie.";
        }
        else if (computerselection == "paper") { 
            return "You Lose."; 
        }
        else if (computerselection == "scissors") { 
            return "You Win!";
        }
    }
    else if(playerselection == "Paper" || playerselection == "paper" || playerselection == "PAPER") { 
        if ( computerselection == "rock") { 
            return "You Win!";
        }
        else if (computerselection == "paper") { 
            return "It's a tie."; 
        }
        else if (computerselection == "scissors") { 
            return "You Lose.";
        }
    }
    else if(playerselection == "Scissors" || playerselection =="scissors" || playerselection == "SCISSORS") { 
        if ( computerselection == "rock") { 
            return "You Lose.";
        }
        else if (computerselection == "paper") { 
            return "You Win!"; 
        }
        else if (computerselection == "scissors") { 
            return "It's a tie.";
        }
    }
    else { 
        return "You must enter rock, paper, or scissors, Please try again.";
    }
}
const results = document.querySelector('.results'); 


const buttons = document.querySelectorAll('button'); 
buttons.forEach((button) => { 
    button.addEventListener('click', () => { 
        let choice = button.getAttribute("class"); 
        console.log(playround(choice, getComputerChoice())); 
    })
});


function getComputerChoice() { 
    let picker = Math.floor(Math.random() * 3); 
    switch(picker) { 
        case 0: 
        return "rock";
        break;
        case 1: 
        return "paper";
        break;
        case 2: 
        return "scissors";
        break;
    }
}