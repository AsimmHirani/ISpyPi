function Meter() {
    var health = 5;

    this.getHealth = function() {
        return health;
    };

    this.increment = function() {
        health++;
        this.draw();
        document.getElementById('label').innerHTML = health;
    };

    this.decrement = function() {
        health--;
        this.draw();
        document.getElementById('label').innerHTML = health;
    };

    this.draw = function() {
        var elem = document.getElementById("myMeter");
        var width = 1;
        var id = setInterval(frame, 3);
        function frame() {
            if (width >= 10*health)
                clearInterval(id);
            width++;
            elem.style.width = width+'%';
        }
    };
}
