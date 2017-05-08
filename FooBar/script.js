/* Task:
Write a function that prints the numbers from 1 to 100.
But for multiples of three print “Foo” instead of the number
and for the multiples of five print “Bar”.
For numbers which are multiples of both three and five print “FooBar”.
 */

//reference to paragraph element
var msg = document.getElementById("message");

for(var i = 1; i <= 100; i++ ) {

    //variables
    var remainder_3x = (i % 3);
    var remainder_5x = (i % 5);

    //print Foo, Bar, or FooBar
    if( (remainder_3x == 0) && (remainder_5x == 0) ) {
        msg.innerHTML += "FooBar ";
    } else if(remainder_3x == 0) {
        msg.innerHTML += "Foo ";
    } else if(remainder_5x == 0) {
        msg.innerHTML += "Bar ";
    } else {
        msg.innerHTML += i + " ";
    }
}
