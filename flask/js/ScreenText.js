function ScreenText() {
    this.textID = 'screenText';

    this.betterText = function() {
        document.getElementById(this.textID).innerHtml = 'Doge liked that. Good job';
    };

    this.greatText = function() {
        document.getElementById(this.textID).innerHtml = 'Doge is confused. Why did you do that';
    };

    this.badText = function() {
        document.getElementById(this.textID).innerHtml = 'Doge is amaze. Doge has transcended';
    };

    this.horribleText = function() {
        document.getElementById(this.textID).innerHtml = 'Doge is very sad. Why u do dis?';
    };
}