var Letter = require('./Letter');
function Word(fullWord) {
    var LetterArray =[];
    for (var i=0;i<fullWord.length;i++) {
        LetterArray.push(new Letter(fullWord[i]));
    }
    this.LetterArray = LetterArray;
}
Word.prototype.stringDisplay=function() {
    console.log(this.LetterArray.join(' '));
}
Word.prototype.letterGuess = function(guess) {
    let count =0;
    for (var j=0;j<this.LetterArray.length;j++) {
        count+=this.LetterArray[j].makeGuess(guess);
    }
    return count; 
}
Word.prototype.checkComplete = function() {
    return this.LetterArray.every(function(objThis) {
        return objThis.isGuessed
    });
}
module.exports = Word;