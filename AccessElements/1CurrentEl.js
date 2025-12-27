/*
    1️⃣ Current Element Access → arr[i]

    Why used?
    To read or modify the current element
    Used in almost every loop

    How it works?
    i is the loop counter
    arr[i] gives value at index i

    When to use?
    ✔ Traversing
    ✔ Updating elements
    ✔ Counting / summing

*/

let arr = [2, 4, "Str", Number];
for(let i=0; i < arr.length; i++){
    console.log(arr[i]); // Prints all array index elements >> 2 4 Str Number

    // console.log(i) // Prints all index numbers >> 0 1 2 3
}

