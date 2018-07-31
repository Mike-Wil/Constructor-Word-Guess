var Word = require('./Word');
var inquirer=require('inquirer');
const wordChoices = ['Mario',
'Luigi',
'Peach',
'Bowser',
'Yoshi',
'Wario',
'Game & Watch',
'Donkey Kong',
'Diddy Kong',
'Link',
'Zelda',
'Sheik',
'Ganondorf',
'Toon Link',
'Samus',
'Zero Suit Samus',
'Pit',
'Marth',
'Ike',
'King DeDeDe',
'Meta Knight',
'Fox',
'Falco',
'Pikachu',
'Lucario',
'Jigglypuff',
'Charizard',
'ROB',
'Ness',
'Captain Falcon',
'Olimar',
'Dr. Mario',
'Sonic',
'Rosalina',
'Bowser Jr.',
'Palutena',
'Robin',
'Little Mac',
'Greninja',
'Duck Hunt Dog',
'Villager',
'Wii Fit Trainer',
'Dark Pit',
'Lucina',
'Shulk',
'Mega Man',
'Pac-Man',
'Mii',
'Mewtwo',
'Lucas',
'Roy',
'Ryu',
'Cloud',
'Corrin',
'Bayonetta'];
var randIndex, guessesRemaining;
const totalGuesses = 10;
var attempts = [];
function takeTurn(currWordObj,currWord) {
    currWordObj.stringDisplay();
    console.log(`Guesses: ${attempts}`);
    inquirer.prompt([
        {type: 'input',
        message: 'Guess a letter!',
        name: 'guess'}
    ]).then(function(ans) {
        if (attempts.indexOf(ans.guess)===-1) {
            attempts.push(ans.guess.toLowerCase())
            let guessCheck = currWordObj.letterGuess(ans.guess.toLowerCase());
            if(guessCheck===0) {
                guessesRemaining--;
                console.log('\x1b[41m%s\x1b[0m','INCORRECT!\nGuesses Remaining: '+guessesRemaining);
                if (guessesRemaining===0) {
                    console.log('You lose!\nThe word was '+currWord+'.\nLet\'s try again!');
                    start();
                } else {
                    takeTurn(currWordObj,currWord);
                }   
            } else {
                console.log('\x1b[42m%s\x1b[0m','CORRECT!');
                if (currWordObj.checkComplete()) {
                    currWordObj.stringDisplay();
                    console.log('Success! On to the next word!');
                    start();
                } else {
                    takeTurn(currWordObj,currWord);
                }
            } 
        } else {
            console.log('You already guessed this letter.');
            takeTurn(currWordObj,currWord);
        }
    });
}
function start() {
    randIndex = Math.floor(Math.random()*wordChoices.length);
    attempts=[];
    guessesRemaining = totalGuesses;
    var currWord = wordChoices[randIndex];
    var currWordObj = new Word(currWord);
    takeTurn(currWordObj,currWord);
}
console.log()
start();