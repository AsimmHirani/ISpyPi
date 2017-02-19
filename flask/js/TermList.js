function TermList() {
    this.xhttp = new XMLHttpRequest();
    this.xhttp.open('GET','/list',false);
    this.xhttp.send();

    this.list = this.xhttp.responseText;
    this.list = this.list.split(', ');

/*    this.isMember = function(string) {
        for ( var i = 0; i < this.list.length; i++) {
            if (this.list[i] === string) {
                return true;
            }
        }
        return false;
    }; */
    this.isMember = function(termList) {
        for (var i = 0; i < termList.length) {
            for (var j = 0; i < this.list.length; i++) {
                if (this.list[j] == termList[i]) {
                    return true;
                }
            }
        }
        return false;
    }
}
