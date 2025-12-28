/*
    🔑 Definition: Subarray

    👉 A subarray is:
    A continuous part of an array

    ✅ Continuous means:
    Elements must be next to each other
    You cannot skip elements


    🧠 Why are Subarrays Important?

    Subarrays are used in:
     Prefix Sum
     Sliding Window
     Kadane’s Algorithm
     Two Pointers
    Maximum / Minimum sum problems

💡 Rule to remember
    If the question says “contiguous” / “continuous” → THINK SUBARRAY


    ❌ NOT a Subarray
    [2, 6]   // skipped 4 → NOT continuous

    ✅ Valid Subarrays
    [2]
    [2, 4]
    [4, 6]
    [6, 8]
    [2, 4, 6, 8]

*/

let array = [2, 4, 6, 8];
let result = [];

for (let start = 0; start < arr.length; start++) {
    for (let end = start; end < arr.length; end++) {
        let subArr = [];

        for (let k = start; k <= end; k++) {
            subArr.push(arr[k]);
        };
        console.log(subArr);
    }
}