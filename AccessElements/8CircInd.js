/*
    8️⃣ Circular Indexing → (i + 1) % n
    Why used?

    Rotate arrays
    Circular sorted arrays
*/

let arr = [5, 4, 2, 1, 3];

let n = arr.length-1;
for(let i=0; i < n; i++){
    console.log(arr[i+1] % n); // 0 2 1 3
}

console.log(3 % 5)