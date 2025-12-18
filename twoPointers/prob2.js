
/*
    2️⃣ Check Palindrome (String)

    Input s = "madam"
    Output true

    Hints
    Compare first and last characters

    Move pointers inward

    Constraints

    1 ≤ length ≤ 10⁵

*/
let s = "madam"
let l = 0, r = s.length-1;
let isPalindrome = true
while(l < r){

    if(s[l] !== s[r]){
        isPalindrome = false;
        break;
    }
    l++;
    r--;
};
console.log(isPalindrome);


// let left = 0,
//   right = s.length - 1;

// while (left < right) {
//   if (s[left] !== s[right]) {
//     console.log(false);
//     break;
//   }
//   left++;
//   right--;
// }