function TermList() {
    this.xhttp = new XMLHttpRequest();
    xhttp.open('GET','/list',false);
    xhttp.send();
    //firstLine = raw.split('\n')[0];
    //term = raw.split('(')[0].trim();

    this.list = xhttp.responseText;
    list = list.split(', ');

    this.isMember = function() {

    };
}
