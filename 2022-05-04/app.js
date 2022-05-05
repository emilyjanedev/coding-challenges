//URL--https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript

//INSTRUCTIONS
/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

//SOLUTION
function pigIt(str){
    //Split string on spaces to get each word
    const words = str.split(' ');
    const newWords = [];

    //Loop through each word checking if character is punctuation first
    words.forEach(word => {
        //If current element is punctuation, add punctuation to newWords array
        if (word.match(/[^\w\s\']|_/g) !== null) {
            newWords.push(word);
        } else {
            //If current element is word, remove first letter and add to end + ay
            const endOfWord = word.slice(1, word.length);
            newWords.push(endOfWord + word[0] + 'ay');
        }
    })
    //Join words together with space
    return newWords.join(' ');
  }

//TEST CASES
console.log(pigIt('Pig latin is cool'));
console.log(pigIt('This is my string'));
console.log(pigIt('Hello world !'));

