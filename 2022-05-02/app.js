//URL--https://www.codewars.com/kata/53dc23c68a0c93699800041d/solutions/javascript

//INSTRUCTIONS
/* Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence! */

//SOLUTION
function smash (words) {
    const sentence = words.join(' ');
    return sentence;
};

//TEST CASES
smash(["hello"])
smash(["hello", "world"])
smash(["hello", "amazing", "world"])
smash(["this", "is", "a", "really", "long", "sentence"])