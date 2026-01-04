/*
    🟢 PROBLEM 2: First Occurrence of Target
    
    Input: [1,2,2,2,3], target = 2
    Output: 1

*/

//🐢 Brute Force (Linear Search)
let Input = [1, 2, 2, 2, 3];
let target = 2;

function searchLinear(ar, tar){
    for(let i=0; i < ar.length; i++){
        if(ar[i] === tar) return i;
    };
    return -1;
};
console.log(searchLinear(Input, target));

function searchBinary(ar, tar){
    let left = 0, right = ar.length -1;
    let mid = Math.floor((left + right) / 2)

    for(let i=0; i < ar.length; i++){
        if(ar[mid] === tar) return mid;
        else if(ar[mid] < tar) left = mid +1;
        else mid = right -1;
    }
    return -1
};
console.log(searchBinary(Input, target));