/*
    4️⃣ Reverse Index Access → arr[n - i - 1]

    Why used?
    Reverse array
    Mirror comparisons

    How it works?
    i = 0 → n-1
    i = 1 → n-2 
*/

let arr = [1, 2, 5, 7, 10];
let n = arr.length;

for(let i=0; i < n; i++){
    arr[n - i - 1] //this will read array in reversed
    console.log(arr[n - i - 1]);
}

//we can also Prints reverse array with i = arr.length; i > 0; i--
for(let i = arr.length; i > 0; i--){
    // console.log(i);
}