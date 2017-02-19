function ScreenText() {
    this.textID = 'screenText';

    this.betterText = function() {
        document.getElementById(this.textID).innerHtml = 'Much like! So Good! Very happy!';
    };

    this.greatText = function() {
        document.getElementById(this.textID).innerHtml = 'Wow! So pro! Much skill! All love!';
    };

    this.badText = function() {
        document.getElementById(this.textID).innerHtml = 'Many despair! So sad! Wow!';
    };

    this.horribleText = function() {
        document.getElementById(this.textID).innerHtml = 'Wow! Such defeat! So loss!';
    };
}
