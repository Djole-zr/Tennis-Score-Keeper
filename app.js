const name1 = document.querySelector('#name1');
const name2 = document.querySelector('#name2');
const editName1 = document.querySelector('.first-edit');
const editName2 = document.querySelector('.second-edit');

editName1.addEventListener ('click', function () {
    name1.textContent = prompt('Enter player name:');
})
editName2.addEventListener ('click', function () {
    name2.textContent = prompt('Enter player name:');
})


const player1 = {
    score: 0,
    setScore: 0,
    totalSets: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1DisplayScore'),
}

const player2 = {
    score: 0,
    setScore: 0,
    totalSets: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2DisplayScore'),
}

const resetButton = document.querySelector('#reset');
const winningSets = document.querySelector('#playto');

let winningGoal = 2;
let isMatchOver = false;

winningSets.addEventListener('change', function () {
    winningGoal = parseInt(this.value);
})


function updateScores(player, opponent) {
    if(!isMatchOver) {
        player.score ++;
        if ((player.setScore === 6 && opponent.setScore === 6 && player.score >= 7 && opponent.score + 1 < player.score) || (!(player.setScore === 6 && opponent.setScore === 6) && player.score >= 4 && opponent.score + 1 < player.score)) {
            player.setScore ++;
            player.score = 0;
            player.score = 0;
            player.display.textContent = '0';
            opponent.display.textContent = '0';
            if (player.setScore === 6 && opponent.setScore + 1 < player.setScore || player.setScore === 7) {
                player.totalSets ++;
                
                if (player.totalSets === winningGoal) {
                    isMatchOver = true;
                }
            }
        } else if (player.score === 1) {
            player.display.textContent = 15;
        } else if (player.score === 2) {
            player.display.textContent = 30;
        } else if (player.score === 3 && opponent.score <=3) {
            player.display.textContent = 40;
        } else if (player.score > 3 && player.score === opponent.score) {
            player.display.textContent = 40;
            opponent.display.textContent = 40;
        } else if (player.score > 3 && opponent.score + 1 === player.score) {
            player.display.textContent = 'A';
            opponent.display.textContent = '';
        } 
    }
}

player1.button.addEventListener('click', function () {
    updateScores(player1, player2);
    console.log(player1.setScore);
    console.log(player1.totalSets);
} )

player2.button.addEventListener('click', function () {
    updateScores(player2, player1);
} )


// **************************STARTO KOD*************************************

// const player1 = {
//     score: 0,
//     button: document.querySelector('#p1Button'),
//     display: document.querySelector('#p1Display'),
// }
// const player2 = {
//     score: 0,
//     button: document.querySelector('#p2Button'),
//     display: document.querySelector('#p2Display'),
// }


// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');


// let winningScore = 2;
// let isGameOver = false;

// function updateScores(player, opponent) {
//     if(!isGameOver) {
//         player.score ++;
//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('has-text-success');
//             opponent.display.classList.add('has-text-danger');
//             player.button.disabled = true;
//             opponent.button.disabled = true;
//     }
//     player.display.textContent = player.score;
//     }
// }

// player1.button.addEventListener('click', function () {
//     updateScores(player1, player2);
// } )

// player2.button.addEventListener('click', function () {
//     updateScores(player2, player1);
// } )

// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     for(let p of [player1, player2]) {
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;
//     }
// }