/*
    HOW Suffix Array is Built
    Example: Suffix Sum

*/

let arr = [2, 4, 6, 8];
let suffix = [];

suffix[arr.length -1] = arr[arr.length -1]; //<< last index 8
// 

for(let i = arr.length-2; i >= 0; i--){
  suffix[i] = suffix[i + 1] + arr[i];

//   console.log(arr[i]);      // 8 6 4 2
//   console.log(suffix[i+1]); // 8 14 18 20
};
console.log("  ",arr);
console.log(suffix);