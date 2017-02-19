// Game.js
function Game() {
    this.df = new DogeFace();
    this.goodList = new TermList();
    this.camera = new Camera();
    this.meter = new Meter();
    this.screenText = new ScreenText();

    this.iterate = function() {
        isGood = this.goodList.isMember(this.camera.activate());
        if (isGood && this.meter.getHealth() != 9) {
            this.meter.increment();
            this.df.update(3);
            this.screenText.betterText();
        } else if (isGood && this.meter.getHealth() == 9) {
            this.meter.increment();
            this.df.update(4);
            this.screenText.greatText();
        } else if (!isGood && this.meter.getHealth() != 1) {
            this.meter.decrement();
            this.df.update(2);
            this.screenText.badText();
        } else if (!isGood && this.meter.getHealth() == 1) {
            this.meter.decrement();
            this.df.update(5);
            this.screenText.horribleText();
        }
    };
}
