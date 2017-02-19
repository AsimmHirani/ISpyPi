// DogeFace.js
function DogeFace() {
    this.update = function(n) {
        document.getElementById('dogeface').src = 'face?n='+n;
    }
}