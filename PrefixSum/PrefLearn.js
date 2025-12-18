
//Prefix-Sum Mastery Plan — 15 clear steps (step-by-step, checklist-style)

//1) Loop fundamentals — for mechanics

//2) Array indexing & bounds

/*
    3) Running total (accumulator pattern)
    Goal: Maintain a running sum variable.
    Do: Implement:
*/
console.log("Running total (accumulator pattern)");

const nArr = [10,30,55,10];
function test(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]; // 10+30+55+10
    }
    return sum; // sum total is 105
}
console.log(test(nArr));

let strArr = ["B",4, 1, 2, "String"]; 
function loopStr(str){
    let emptyStr= "";
    for(let i=0; i < str.length; i++){
        emptyStr += str[i] // B+4+1+2+String
    };
    return emptyStr; // B412String
};
console.log(loopStr(strArr));

let ar = [42, 2, 6, 50];
function addEle(arr){
    let sum = 0;
    let i = 0;

    while(i < arr.length){
        sum += arr[i]; //42+2+6+50
        i++;
    }
    return sum;
};
console.log(addEle(ar));

console.log();// Empty space in terminal

/* 4) Build basic prefix array (out-of-place)
    Goal: Implement canonical prefix-sum array.
    Do: Code the canonical function:
*/
const bArr = [2, 5, 8];
function prefixSum(arr){
    if(arr.length === 0) return [];

    const pref = new Array(arr.length)
    pref[0] = arr[0];

    for(let i=0; i < arr.length; i++){
        pref[i] = pref[i - 1] + arr[i];
    }
    return pref;
};
console.log(prefixSum(bArr));
