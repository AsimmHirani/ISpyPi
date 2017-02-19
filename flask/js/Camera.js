function Camera() {
    this.path = '/camera';

    this.activate = function() {
        xhttp = new XMLHttpRequest();
        xhttp.open('GET',this.path,false);
        xhttp.send();
        return xhttp.responseText;
    }
}
