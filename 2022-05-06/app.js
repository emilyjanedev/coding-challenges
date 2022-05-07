//URL-- https://www.codewars.com/kata/57eae20f5500ad98e50002c5

//INSTRUCTIONS
/* Simple, remove the spaces from the string, then return the resultant string. */

//SOLUTION
function noSpace(x){
    return x.split(' ').join('');
}

//TEST CASES
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'))
console.log(noSpace('8aaaaa dddd r     '))