/*
    7️⃣ Check Pair with Given Difference (Sorted)

    arr = [1, 3, 5, 8], diff = 2
    Output: true
    
    Hints
    Use two pointers
    Compare arr[j] - arr[i]

    Constraints
    Sorted array

*/

let arr = [1, 3, 5, 8], diff = 2;

let found = false;
let i =0 , j = 1;

//Brute Force
for(let i=0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[j] - arr[i] === diff) found = true;
    }
};
console.log("Brute force >", found);


// while(j < arr.length){
    
//     let d = arr[j] - arr[i];

//     if(d === diff){
//         found = true;
//         break
//     }   
//     else if(d < diff) j++;
//     else i++;
// }
// console.log(found);