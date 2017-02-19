// Game.js
function Game() {
    this.df = new DogeFace();
    this.goodList = new TermList();
    this.camera = new Camera();
    this.meter = new Meter();
    this.screenText = new ScreenText();

    this.iterate = function() {
        isGood = goodList.isMember(camera.activate());
        if (isGood && meter.getHealth() != 9) {
            meter.increment();
            df.update(3);
            screenText.betterText();
        } else if (isGood && meter.getHealth() == 9) {
            meter.increment();
            df.update(4);
            screenText.greatText();
        } else if (!isGood && meter.getHealth() != 1) {
            meter.decrement();
            df.update(2);
            screenText.badText();
        } else if (!isGood && meter.getHealth() == 1) {
            meter.decrement();
            df.update(5);
            screenText.horribleText();
        }
    }

    this.newGame = function() {

    }
}