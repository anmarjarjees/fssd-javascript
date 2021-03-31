// Our pure JS code
function findResult() {
    /*
            we need to take the user input (numbers)
            getElementById()
   */

    // the user input will be just a text (string ) of numbers
    // HTML form input field convert the user input to text
    var userInputStr = document.getElementById("numbers").value;

    /*
    Because we didn't use "required" to validate if the field is empty or not [type="button"]
    we can check by ourselves:

    we can check if the user did input any value

    if userInputStr has any value => plain English
    if (userInputStr) => in JavaScript/Python => if userInputStr is True or has any value 
    */
    if (userInputStr) {
        // I will start my major code here:
        // for testing we will use the console window 
        // to output the user's values (his/her numbers);
        // so we will output the value of this variable "userInputStr"
        console.log(userInputStr); // " 1 2 3 4 5 "

        // to remove all the extra spaces before and after the user input 
        // (Remove whitespace from both sides of a string)
        // we can use the JavaScript built-in method trim()
        userInputStr = userInputStr.trim();
        //  userInputStr = "1 2 3 4 5"

        // we need to convert this string into an array:
        // using split() method to split the string letters into an array
        // split() method (function) needs one parameter which the delimiter
        var userNumberArray = userInputStr.split(" ");
        // userNumberArray = [ "1", "2", "3", "4", "5"]

        console.log(userNumberArray);
        // we want to get the user input for which option/radio button

        // declare our new "global" variable (outside any if condition) based on our function block 
        // (It's not global based on the entire JS file) 
        // This variable "result" to contain the final result of multiply/divide/count
        // global variable is declared inside the main script (outside any block)
        var result; // no value?

        // we will use if condition:
        // We need to know which radio button has been clicked first:
        // Yes we can use: if (document.getElementById("mul").value == 1)
        // But we will use the property checked
        if (document.getElementById("mul").checked) {
            // Just for testing:
            // alert("you want to find the multiplication");
            // we will write the code for multiplying all the numbers:

            // we just need to reset our "global" variable to 1
            result = 1;
            for (var i = 0; i < userNumberArray.length; i++) {
                result *= userNumberArray[i];
            }
            // for testing:
            console.log(result);
        } else if (document.getElementById("div").checked) {
            // Just for testing:
            // alert("divide all numbers");
            /*
           [ "1", "2", "3", "4", "5"]
           the logic:
           the result of = 1 / 2 = result
           the result = result / 3 = result
           the result = result / 4 = result
           the result = result / 5
           */

            // We need to start with initial value of our variable result 
            // this value should be the first number in the array
            result = userNumberArray[0];
            // We need to start with the second element (not the first one) in the array 
            // i = 1
            for (var i = 1; i < userNumberArray.length; i++) {
                result /= userNumberArray[i];
            }
            // for testing:
            console.log(result);
        } else {
            // Just for testing:
            // alert("Count how many numbers");
            result = userNumberArray.length;
            // for testing:
            console.log(result);
        }

        // Now only one final statement to print the result
        document.getElementById("result").innerText = result;
    } // end major if for the user input
    else { // else if nothing is typed
        alert("Please input your numbers with spaces!");
    } // end else for alert() message

} // end findResult()