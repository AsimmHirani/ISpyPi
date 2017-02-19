function ScreenText() {
    this.textID = 'screenText';

    this.betterText = function() {
        document.getElementById(this.textID).innerHTML = 'Much like! So Good! Very happy!';
    };

    this.greatText = function() {
        document.getElementById(this.textID).innerHTML = 'Wow! So pro! Much skill! All love!';
    };

    this.badText = function() {
        document.getElementById(this.textID).innerHTML = 'Many despair! So sad! Wow!';
    };

    this.horribleText = function() {
        document.getElementById(this.textID).innerHTML = 'Wow! Such defeat! So loss!';
    };
}
