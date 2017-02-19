function TermList() {
    this.xhttp = new XMLHttpRequest();
    xhttp.open('GET','/list',false);
    xhttp.send();

    this.list = xhttp.responseText;
    list = list.split(', ');

    this.isMember = function(var string) {
        for ( var i = 0; i < list.length; i++) {
            if (list[i] === string) {
                return true;
            }
        }
        return false;
    };
}
