/* Task: Swap the following numbers
a = 5;
b = 6;
*/

//Reference to paragraph element
var msg = document.getElementById("message");

//globals
var a = 5;
var b = 6;
var c = 0;

//store value of a into c
c = a;

//copy value of b into a
a = b;

//copy the value of c into b
b = c;

//output
msg.innerHTML += "A = " + a + "<br/> B = " + b;
