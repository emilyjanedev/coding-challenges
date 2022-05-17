//URL--https://www.codewars.com/kata/5583090cbe83f4fd8c000051

//INSTRUCTIONS
/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0]
*/

//SOLUTION
function digitize(n) {
    const result = [];
    const inputString = n.toString();
    for (i = inputString.length - 1; i >= 0; i--) {
        result.push(parseInt(inputString[i]));
    }
    return result;
}

//TEST CASES
console.log(digitize(35231));
console.log(digitize(0));