/* 
    6️⃣ Skipping Index → i += 2

    Why used?
    Access alternate elements
    Even / odd index problems

*/

let arr = [21, 0, 43, 5, 80];

// i+=2 skips 1 element jumps to its next element
for(let i=0; i < arr.length; i+=2){
    console.log(arr[i]); // 21 43 80
} 

console.log("Test");