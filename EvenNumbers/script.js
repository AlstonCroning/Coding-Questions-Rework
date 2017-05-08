/**
 * Created by Alston on 2017-05-08.
 */

/* Task:
 Write a function that counts the number of even numbers
 that appear in a range of integers 0..n,
 where n is supplied as the sole argument to your function.
 */

//reference to paragraph element
var msg = document.getElementById("message");

//call function and display results
msg.innerHTML += countEvenNumbers(100);


function countEvenNumbers(n) {

    //variables
    var count = 0;
    var remainder = 0;

    for(var i = 0; i <= n; i++) {

        remainder = i % 2;//get remainder of each number

        //increase count if even numbers are found
        if (remainder == 0) {
            count++;
        }
    }

    return count;
}



