// let btn = document.getElementById("btn");
// let inner = document.querySelector(".inner");


// btn.addEventListener("click", () => {
//     let name = document.getElementById("name").value;
//     let newbtn = document.createElement("button");
//     newbtn.textContent = 'Play Game';
//     newbtn.style.background = 'rgb(110, 179, 6)';
//     newbtn.style.marginTop = '10px';
//     newbtn.style.padding = '6px';
//     inner.appendChild(newbtn);

//     newbtn.addEventListener('click', function () {
//         game();
//     });
// });

// function game() {

//     let userguess = Number(prompt('Enter a number Only : '));
//     let compguess = (Math.floor(Math.random() * 100) + 1);

//     result(userguess, compguess);
// }

// function result(userguess, compguess) {
//     if (userguess === compguess) {
//         inner.style.marginTop = '80px';
//         inner.style.fontSize = '25px';
//         inner.innerHTML = 'No one wins its a tie!';

//         let newbtn1 = document.createElement("button");
//         newbtn1.textContent = 'Try Again';
//         newbtn1.style.background = 'rgb(110, 179, 6)';
//         newbtn1.style.marginTop = '10px';
//         newbtn1.style.padding = '6px';
//         inner.appendChild(newbtn1);
//         newbtn1.addEventListener('click', function () {
//             game();
//         });
//     }
//     else if (userguess <= compguess) {
//         inner.style.marginTop = '80px';
//         inner.style.fontSize = '25px';
//         inner.innerHTML = 'You are guessing lower than computer ';

//         let newbtn1 = document.createElement("button");
//         newbtn1.textContent = 'Try Again';
//         newbtn1.style.background = 'rgb(110, 179, 6)';
//         newbtn1.style.marginTop = '5px';
//         newbtn1.style.padding = '6px';
//         inner.appendChild(newbtn1);
//         newbtn1.addEventListener('click', function () {
//             game();
//         });
//     }
//     else {
//         inner.style.marginTop = '80px';
//         inner.style.fontSize = '25px';
//         inner.innerHTML = 'You are guessing higher than computer ';

//         let newbtn1 = document.createElement("button");
//         newbtn1.textContent = 'Try Again';
//         newbtn1.style.background = 'rgb(110, 179, 6)';
//         newbtn1.style.marginTop = '10px';
//         newbtn1.style.padding = '6px';
//         inner.appendChild(newbtn1);
//         newbtn1.addEventListener('click', function () {
//             game();
//         });

//     }
// }

let btn = document.getElementById("btn");
let inner = document.querySelector(".inner");

let tries = 0;
const maxTries = 5;

btn.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    tries = 0;

    showWelcomeScreen(name);
});

function showWelcomeScreen(name) {
    inner.innerHTML = `
        <h2>Welcome, ${name}!</h2>
        <p>Let's play the Number Guessing Game. (You have ${maxTries} tries)</p>
    `;

    let playBtn = document.createElement("button");
    playBtn.textContent = 'Play Game';
    playBtn.style.background = 'rgb(110, 179, 6)';
    playBtn.style.marginTop = '10px';
    playBtn.style.padding = '6px';
    inner.appendChild(playBtn);

    playBtn.addEventListener('click', () => {
        game();
    });
}

function game() {
    if (tries >= maxTries) {
        showRestartButton();
        return;
    }

    let userguess = Number(prompt('Enter a number between 1 and 100:'));
    let compguess = Math.floor(Math.random() * 100) + 1;

    tries++;
    result(userguess, compguess);
}

function result(userguess, compguess) {
    inner.innerHTML = `
        <p>Your guess: ${userguess}</p>
        <p>Computer's guess: ${compguess}</p>
    `;

    let msg = '';
    if (userguess === compguess) {
        msg = '🎉 It\'s a tie! You both guessed the same.';
    } else if (userguess < compguess) {
        msg = '📉 You guessed lower than the computer.';
    } else {
        msg = '📈 You guessed higher than the computer.';
    }

    inner.innerHTML += `<p>${msg}</p><p>Attempt ${tries} of ${maxTries}</p>`;

    if (tries >= maxTries) {
        showRestartButton();
    } else {
        let tryAgainBtn = document.createElement("button");
        tryAgainBtn.textContent = 'Try Again';
        tryAgainBtn.style.background = 'orange';
        tryAgainBtn.style.marginTop = '10px';
        tryAgainBtn.style.padding = '6px';
        inner.appendChild(tryAgainBtn);

        tryAgainBtn.addEventListener('click', () => {
            game();
        });
    }
}

function showRestartButton() {
    inner.innerHTML += `<p>🔄 You've reached the maximum number of attempts.</p>`;

    let restartBtn = document.createElement("button");
    restartBtn.textContent = 'Restart Game';
    restartBtn.style.background = 'red';
    restartBtn.style.marginTop = '10px';
    restartBtn.style.padding = '6px';
    inner.appendChild(restartBtn);

    restartBtn.addEventListener('click', () => {
        location.reload(); // Reloads the page to start from the beginning
    });
}
