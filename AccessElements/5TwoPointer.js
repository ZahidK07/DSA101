/*
    5️⃣ Two Pointer Access → arr[left], arr[right]

    Why used?
    Reduce O(n²) → O(n)

    Used in sorted arrays

*/

let arr = [2, 4, 5, 9];
let target = 7

//Brute Force (Two Sum)
for(let i=0; i < arr.length; i++){
    for(let j=1; j < arr.length; j++){
        if(arr[i] + arr[j] === target) console.log("target found");
        // console.log(arr[j], arr[i]);
    }
}

//Optimized Two sum problem with Two pointers
let l = 0, r = arr.length -1;

while(l < r){
    let sum = arr[l] + arr[r];
    if(sum === target){
        console.log(true);
        break
    } 
    else if(sum < target) left++;
    else r--;
};