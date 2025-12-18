

let palindrome = "abccba"

function isPalindrome(str){
    //loop 1 to check from left side
    let rev = "";

    for(let i=str.length-1; i>=0; i--){
        rev += str[i];
    }

    return rev === str;
};
console.log(isPalindrome(palindrome));
console.log("");

console.log("");
let sortedAr = [1, 1, 2, 2, 3];

function removeDuplicates(arr){
    
};
console.log(sortedAr);