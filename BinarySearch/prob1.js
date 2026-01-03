/*
    ✅ Smart way (Binary Search)

    Open the middle of the book

    If the word there comes before “cat”, go right

    If it comes after “cat”, go left

    Repeat until found

    👉 This smart middle-checking is Binary Search
*/

/* 
    ✅ WHEN to use

    Binary Search works ONLY when:

    ✔ Array is SORTED (increasing or decreasing)

    Sorted numbers: [1, 3, 5, 7, 9]
    Sorted names: ["apple", "ball", "cat"]


    🤔 WHY Binary Search is used

    Because it is FAST 🚀

    Method	Time
    Linear Search	O(n)
    Binary Search	O(log n)
*/

/*
    Question We’ll Solve

    Given a sorted array, find the index of target number.
    If not found, return -1.

    arr = [2, 4, 6, 8, 10]
    target = 8
    Output = 3
    
*/

let arr = [2, 4, 6, 8, 10];
let target = 8;

//Brute force solution - Linear Search
function LinearSearch(ar, tar){
    
    for(let i=0; i < ar.length; i++){
        if(ar[i] === tar) return `${i} found`
    }
    return `${-1} not found`;
};
console.log(LinearSearch(arr, target));
console.log();

//Optimized solution - Binary Search

function BinarySearch(ar,tar){

    // create left and right index
    let left = 0, right = ar.length;

    while(left <= right){

        //creat a middle index to check center part of an array
        let mid = Math.floor((left + right) / 2)

        // check if middle index element matches with target
        if(ar[mid] === tar) return mid;

        // otherwise check forward from left to right
        else if(ar[mid] <= tar) left = mid +1;

        // backward from right to left
        else right = mid -1;
    };

    // if theres no targeted element is found
    return `${-1} not found`

};
console.log(BinarySearch(arr, target), "<< Binary Searched");