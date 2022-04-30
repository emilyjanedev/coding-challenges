//URL--https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript

//INTRUCTIONS
/* Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

//SOLUTION
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    text = text.toLowerCase();
    let newString = '';
    //Check if the text is a letter
    //If yes, find index of letter in alphabet and add indexOf + 1 to new string
    for (i=0; i < text.length; i++) {
       if (alphabet.includes(text[i])) {
        newString += `${alphabet.indexOf(text[i]) + 1} `
       }
    }
    //Trim extra space off end of string
    let result = newString.trim();
    return result;
  }

//TEST CASES
alphabetPosition("The sunset sets at twelve o' clock.") //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
alphabetPosition("The narwhal bacons at midnight.") //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"