/*
    4️⃣ Count Pairs with Sum < Target (Sorted)

    arr = [1, 2, 3, 4], target = 6
    Output: 4

    Hints
    If sum is valid, all pairs in between are valid

    Constraints
    Sorted array
*/
let arr = [1, 2, 3, 4];
let target = 6;

/* Brute Force solution */
let bruteCount = 0;

//nested loops
for(let i=0; i < arr.length; i++){
    for(let j= i+1; j < arr.length; j++){
        if(arr[i] + arr[j] < target){
            bruteCount++;
        }
    }
}
console.log(bruteCount, "Brut force")

/* Optimal solution  */
// function countPairs(arr){
// let left=0, right = arr.length-1
// let count = 0;

//     while(left < right){
//         if(arr[left] + arr[right] < target){
//             count += (right - left);
//             left++;
//         }else{
//             right--;
//         }
//     }
//     return count;
// };
// console.log(countPairs(arr), "<< count pairs");
