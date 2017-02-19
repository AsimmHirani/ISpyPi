function Meter() {
    this.health = 5;

    this.getHealth = function() {
        return this.health;
    };

    this.increment = function() {
        this.health++;
        this.draw();
    };

    this.decrement = function() {
        this.health--;
        this.draw();
    };

    this.draw = function() {
        var elem = document.getElementById("myMeter");
        var width = 1;
        var id = setInterval(frame, 3);
        function frame() {
            if (width >= 10*this.health)
                clearInterval(id);
            width++;
            elem.style.health = width;
        }
    };

    this.draw();
}
