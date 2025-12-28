
/*
    Problem 1: Prefix Sum Array
*/

let arr = [1, 2, 3, 4];
// Output [1, 3, 6, 10]

function prefixSum(num) {
    let prefix = [];
    prefix[0] = num[0];

    for(let i=1; i < num.length; i++){
        prefix[i] = prefix[i -1] + num[i];
    }
    return prefix; // 1 3 6 10
};
console.log(prefixSum(arr));
