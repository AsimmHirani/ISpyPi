function Meter() {
    this.health = 5;

    this.getHealth = function() {
        return this.health;
    };

    this.increment = function() {
        health++;
        this.draw();
    };

    this.decrement = function() {
        health--;
        this.draw();
    };

    this.draw = function() {
        var elem = document.getElementById("myMeter");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            width = 10 * health;
            elem.style.health = width;
        }
    };

    this.draw();
}
