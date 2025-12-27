/*
    1: RANGE SUM QUERY

    Problem
    Find sum from index L to R
*/

// arr = [2, 4, 6, 8, 10];
// L = 1, R = 3;
//Output = 18

let sum = 0;
// for(let i=L; i <= R; i++){
//     console.log(sum);
    
//     sum += arr[i];
// };
// console.log(sum, "Brute 1"); 
//TC O(n) - SC O(1)

//Optimized
arr = [2, 4, 6, 8, 10];
L = 1, R = 3;
let prefix = [];
prefix[0] = arr[0];

for(let i=1; i < arr.length; i++){
    prefix[i] = prefix[i-1] + arr[i];
    // console.log(prefix);
}
let res = prefix[R] - prefix[L -1];
console.log(res);


// Q2 find sum of L R and Output will be 23

// let arr1 = [12, 2, 5, 3, 1, 4, 2];
// let LL = 0, RR = arr1.length-1;
// let sUm = 0;
// let target = 23
// for(let i=LL; i < RR; i++){
//     sUm += arr1[i];
//     if(sUm === target){
//         console.log("found");
//         break
//     }
//     console.log(sUm);
// };
// console.log(target, "target"); //TC O(n) - SC O(1)