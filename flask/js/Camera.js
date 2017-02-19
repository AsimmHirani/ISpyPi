function Camera() {
    this.path = '/camera';

    this.activate = function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET',this.path,false);
        xhttp.send();
        var raw = xhttp.responseText;
        var firstLine = raw.split('\n')[0];
        var term = raw.split('(')[0].trim();
        return term;
    }
}
