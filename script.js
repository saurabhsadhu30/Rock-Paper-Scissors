const comscoredisplay = document.querySelector('#com_score');
const myscoredisplay = document.querySelector('#your_score');
const buttons = document.querySelectorAll('.userchoice');
const playerpick_display = document.querySelector('#playerpick');
const pcpick_display = document.querySelector('#pcpick');
const result_display = document.querySelector('#result');
const maincontainer = document.querySelector('.maincontainer');
const backcontainer = document.querySelector('.backsidecontainer');
const playagain = document.querySelector('.playagain');
const plpickring = document.querySelector('#picring');
const pcpickring = document.querySelector('#pcring');
const rulebutton = document.querySelector('.rule_button');
const rulebox = document.querySelector('.rulebox');
const close = document.querySelector('.close');
const next_btn = document.querySelector('.next_button');


let lsmyscore = localStorage.getItem('myScore');
let lspcscore = localStorage.getItem('pcScore');
let myScore = 0;
let pcScore = 0;
var playerChoices;
var pcChoices;
var result;


var rockimg = document.createElement('img')
rockimg.src = "./image/icons8-fist-67 1.png";
rockimg.width = '80';

var scisimg = document.createElement('img');
scisimg.src = "./image/17911 1.png";
scisimg.width = '50';

var paperimg = document.createElement('img')
paperimg.src = "./image/icons8-hand-64 1.png";
paperimg.width = '80';

var rockimg2 = document.createElement('img')
rockimg2.src = "./image/icons8-fist-67 1.png";
rockimg2.width = '80';

var scisimg2 = document.createElement('img');
scisimg2.src = "./image/17911 1.png";
scisimg2.width = '50';

var paperimg2 = document.createElement('img')
paperimg2.src = "./image/icons8-hand-64 1.png";
paperimg2.width = '80';


rulebutton.addEventListener('click', function () {
    rulebox.classList.add('rulebox_open');
    setTimeout(() => {
        rulebox.classList.remove('rulebox_open');
    }, 25000);
})
close.addEventListener('click', function () {
    rulebox.classList.remove('rulebox_open');
})

function playerChoicesfn() {
    if (playerChoices === "rock") {
        plpickring.classList.add('rock')
        playerpick_display.appendChild(rockimg);
    }
    else if (playerChoices === "scissors") {
        plpickring.classList.add('scissors')
        playerpick_display.appendChild(scisimg);
    }
    else if (playerChoices === "paper") {
        plpickring.classList.add('paper')
        playerpick_display.appendChild(paperimg);
    }
}

function computergeneratefn() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        pcChoices = "rock";
        pcpick_display.appendChild(rockimg2);
        pcpickring.classList.add('rock');
    }
    else if (randomNumber === 2) {
        pcChoices = "scissors";
        pcpick_display.appendChild(scisimg2);
        pcpickring.classList.add('scissors');
    }
    else if (randomNumber === 3) {
        pcChoices = "paper";
        pcpick_display.appendChild(paperimg2);
        pcpickring.classList.add('paper')
    }
}

function compare() {
    if (playerChoices === pcChoices) {
        result = 'TIE UP';
        playagain.innerText = 'REPLAY';
        document.querySelector('.againsttext').style.visibility = 'hidden';
    }
    else if (playerChoices === 'rock' && pcChoices === 'scissors') {
        result = 'YOU WIN';
    }
    else if (playerChoices === 'rock' && pcChoices === 'paper') {
        result = 'YOU LOST';
    }
    else if (playerChoices === 'scissors' && pcChoices === 'rock') {
        result = 'YOU LOST';
    }
    else if (playerChoices === 'scissors' && pcChoices === 'paper') {
        result = 'YOU WIN';
    }
    else if (playerChoices === 'paper' && pcChoices === 'rock') {
        result = 'YOU WIN';
    }
    else if (playerChoices === 'paper' && pcChoices === 'scissors') {
        result = 'YOU LOST';
    }
    result_display.innerHTML = result;
    winnerfn()
}

function localdata() {
    if (lsmyscore) {
        myScore = parseInt(lsmyscore);
        myscoredisplay.innerText = myScore;
    }
    if (lspcscore) {
        pcScore = parseInt(lspcscore);
        comscoredisplay.innerText = pcScore;
    }
};

function winnerfn() {
    if (result === 'YOU WIN') {
        plpickring.classList.add('ripplebox');
        ++myScore;
        localStorage.setItem('myScore', myScore);
        myscoredisplay.innerText = myScore;
        next_btn.style.display = 'inline-block';
    }
    else if (result === 'YOU LOST') {
        pcpickring.classList.add('ripplebox');
        ++pcScore;
        localStorage.setItem('pcScore', pcScore);
        comscoredisplay.innerText = pcScore;
    } else {
        myscoredisplay.innerText = myScore;
        comscoredisplay.innerText = pcScore;
    }
}


buttons.forEach(buttons => buttons.addEventListener('click', (e) => {
    maincontainer.style.display = 'none';
    backcontainer.style.display = 'flex';
    playerChoices = e.target.id;
    playerChoicesfn()
    computergeneratefn()
    compare()
})
);

localdata()



