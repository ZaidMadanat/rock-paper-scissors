const buttons = document.querySelectorAll('button');
let player = 0;
let computer = 0;
buttons.forEach(button => { 
    button.addEventListener('click', e => { 
        game(button.getAttribute("class"));
    })
})

function game(choice) { 
    const scores = document.querySelector('.scores');
    const comp = document.querySelector('.comp'); 
    const you = document.querySelector('.you');
    let computerselection = getComputerChoice();
    result = playround(choice, computerselection);

    comp.textContent = "You picked: " + choice;
    you.textContent = "Computer picked: " + computerselection;

    if (result == "You Win!") { 
        player++; 
        scores.textContent = "Score: " + player + " - " + computer;
    }
    else if (result == "You Lose.") { 
        computer++;
        scores.textContent = "Score: " + player + " - " + computer;
    }

    final = document.querySelector('.final');
    if (player == 5 ) { 
        comp.remove();
        you.remove();
        final.textContent = "Congratulations, You WON!";
        scores.textContent = "Final score is: " + player + " - " + computer;
        endgame();
    } 
    else if (computer == 5 ) { 
        comp.remove();
        you.remove();
        final.textContent = "Sorry, You Lost.";
        scores.textContent = "Final score is: " + player + " - " + computer;
        endgame();
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

function endgame() { 
    buttons.forEach(button => { 
        button.disabled = true;
    })
}