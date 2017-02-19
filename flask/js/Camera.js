function Camera() {
    this.path = '/camera';

    this.activate = function() {
        var xhttp = new XMLHttpRequest();
        xhttp.open('GET',this.path,false);
        xhttp.send();
        var raw = xhttp.responseText;
	alert("Camera Output:"+raw);
        var firstLine = raw.split('\n')[0];
        var term = raw.split('(')[0].trim();
        term = term.split(' ');
        return term;
    };
}
