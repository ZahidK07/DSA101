
/*
    🟢 PROBLEM 3: Last Occurrence of Target

    Input: [1,2,2,2,3], target = 2
    Output: 3
*/

let Input = [1, 2, 2, 2, 3], target = 2;

//Linear Serch
function searchLin(ar, tar){

    for(let i=ar.length; i > 0; i--){
        if(ar[i] === tar) return i;
    };
    return -1
};
console.log("found Element on Index>>", searchLin(Input, target));
/*
- Time complexity: O(n)
- Space complexity: O(1)
*/

//Binary Search with for loop
function searchBin(ar, tar){
    let left = 0, right = ar.length -1;
    let mid = Math.floor((left + right) / 2); // middle Indexes

    for(let i =ar.length; i > 0; i--){
        if(ar[i] === tar) return i;
        else if(mid[i] < tar) return left +1;
        else mid[i] = right -1; 
    };
    return `not found ${-1}`

};
console.log("Binary Search Element on Index >>", searchBin(Input, target));
/*
- Time complexity: O(n) not acceptable
- Space complexity: O(1)
*/

//Binary Search with while loop
function Binarysearch(){

};
console.log("",Binarysearch(Input, tar));
