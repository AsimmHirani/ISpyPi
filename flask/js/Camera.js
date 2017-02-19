function Camera() {
    this.path = '/camera';

    this.activate = function() {
        xhttp = new XMLHttpRequest();
        xhttp.open('GET',this.path,false);
        xhttp.send();
        raw = xhttp.responseText;
        firstLine = raw.split('\n')[0];
        term = raw.split('(')[0].trim();
        return term;
    }
}
