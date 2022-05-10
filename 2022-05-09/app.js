//URL--https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

//INSTRUCTIONS
/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].≈ */

//SOLUTION
function countPositivesSumNegatives(input) {
    const result = [];
    let negatives = 0;
    let positives = 0;

    if (input !== null) {
        if (input.length === 1 && input[0] === 0) {
            result.push(0);
        }
        input.forEach(number => {
            if (number > 0) {
                positives += 1;
            } else {
                negatives += number;
            }
        })
    } else {
        return result;
    }

if (positives !== 0 && negatives !== 0){
        result.push(positives, negatives);
    }
    return result;
}

//TEST CASES
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0]))
console.log(countPositivesSumNegatives([0, 0]))