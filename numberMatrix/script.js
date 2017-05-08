/**
 * Created by Alston on 2017-05-08.
 */

/* Task 1:
 Print to stdout the following output using only one loop:

 1 1 1 1 1
 2 2 2 2 2
 3 3 3 3 3
 4 4 4 4 4
 5 5 5 5 5

 Task 2: do the above for a given number
 */

//globals
var msg = document.getElementById("message");
var giveNumber = 10;


//Task 1: display number matrix with only using 1 loop
msg.innerHTML += "Task 1: display number matrix with only using 1 loop<br/><br/>";
for( var a = 1; a <= 5; a++) {
    msg.innerHTML += a + " " + a + " " + a + " " + a + " " + a + " <br/>";
}

msg.innerHTML += "<br/>Task 2: display number matrix for a give number<br/><br/>";
//Task 2: display number matrix for a give number
for(var i = 1; i <= giveNumber; i++ ) {

    for(var j = 1; j <= giveNumber; j++) {
        msg.innerHTML += i + " ";
    }
    msg.innerHTML += "<br/>";
}
