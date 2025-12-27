/*
    7️⃣ Jump Index (Value Index Mapping) → arr[arr[i]]

    Meaning
    Value stored in array is used as another index

    Used in:
    ✔ Frequency
    ✔ Cycle detection
    ✔ Missing / duplicate number

*/

let arr= [2, 3, 1, 0];

for(let i=0;i < arr.length; i++){
    console.log(arr[arr[i]]) // 1 0 3 2
}