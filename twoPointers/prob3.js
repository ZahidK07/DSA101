/*
    3️⃣ Two Sum (Sorted Array)

    arr = [1, 2, 3, 4, 6], target = 6

    Output true

    Hints
    Small + large

    Move pointers based on sum

    Constraints

    Array is sorted

    2 ≤ n ≤ 10⁵

*/

let arr = [1, 2, 3, 4, 6];
let target = 6;
let found = false;

/*
    Brute Force solution will have nested loops
*/
// console.log("Brute Force");
// for(let i=0; i < arr.length; i++){
//     for(let j=1; j < arr.length; i++){
//         if(arr[i] + arr[j] === target){
//             found = true;
//             break;
//         }
//     } if(found) break;
// };
// console.log(found);
// TC: n * n = O(n^2) // SC: O(1)


console.log();

console.log("Optimal");
/*
    Two pointer solution is optimized way of solving this problem to get Efficient TC and SC
*/
function targtSum(arr){
    let left = 0, right = arr.length-1;

    while(left < right){

        let sum = arr[left] + arr[right];

        if(sum === target){
            found = true
            break;
        }else if(sum < target){
            left++
        }else{
            right--;
        }
    }
    return found
};
console.log(targtSum(arr));


