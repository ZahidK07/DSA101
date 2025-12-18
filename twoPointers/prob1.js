/*
    1️⃣ Reverse Array (In-Place)
    Problem
    Reverse the given array without using extra space.

    Input arr = [1, 2, 3, 4, 5]
    Output [5, 4, 3, 2, 1]

    Hint
    Use two pointers: start and end.

    Constraints

    1 ≤ n ≤ 10⁵
*/
let arr1 = [1, 2, 3, 4, 5];
// function reverseArray(arr){
//     let left = 0, right = arr.length-1;

//     while(left < right){
//         let temp = arr[left]

//         arr[left] = arr[right];

//         arr[right] = temp

//         left++;
//         right--;         
//     }
//     return arr;
// };
// console.log(reverseArray(arr1));

let left = 0, right = arr1.length-1;

while(left < right){
    [arr1[left], arr1[right]] = [arr1[right], arr1[left]];
    left++;
    right--;
}
console.log(arr1); //[ 5, 4, 3, 2, 1 ]

//[arr1[left], arr1[right]] = [arr1[right], arr1[left]]