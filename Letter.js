function Letter(character) {
    this.character = character;
    if (("a" <= character && character <= "z")||(("A" <= character && character <= "Z"))) {       
        this.isGuessed = false;
    } else {
        this.isGuessed = true;
    }
}
Letter.prototype.toString = function() {
    if (this.isGuessed) {
        return this.character;
    }
    return '_';
}
Letter.prototype.makeGuess = function(guess) {
    if (this.character.toLowerCase()===guess) {       
        this.isGuessed=true;
        return 1;
    }
    return 0;
}
module.exports = Letter;
