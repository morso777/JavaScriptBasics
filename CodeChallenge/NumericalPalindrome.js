/*
*A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
*In this coding challenge we need solution that tells is a given number is palindrome. Only numbers allowed.
*For example: 2442 or 10001

Constraints
 *A will consist at most  lower case english letters.

Sample Input:
2442

Sample Output:
true

*/


function isPalindrome (num){
    if (typeof num !== 'number' || num <0){
        return false;
    }

    return + num.toString().split('').reverse().join('')===num;
}

console.log (isPalindrome(2442));
