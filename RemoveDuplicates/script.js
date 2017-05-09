/**
 * Created by Alston on 2017-05-09.
 */

/* Task:  Remove the duplicates

 words = ['one', 'one', 'two', 'three', 'three', 'two']

 */

//globals
var msg = document.getElementById("message");
var words = ['one','one','two','three','three','two'];

//compare current and next data for removing duplicates
for(var i = 0; i < words.length; i++) {

    for(var j = (i+1); j < words.length; j++) {

        var currentData = words[i];
        var nextData = words[j];

        //remove duplicates
        if(currentData == nextData) {
            words[i] = "";
        }
    }
}

//display result
for(var a = 0; a < words.length; a++) {
    if( words[a] != "") {
        msg.innerHTML += words[a] + "<br/>";
    }
}