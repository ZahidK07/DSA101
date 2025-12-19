/*
    5️⃣ Remove Duplicates (Sorted Array)

    arr = [1, 1, 2, 2, 3]
    Output [1, 2, 3]
*/

/*
    Hints
    One pointer to read
    One pointer to write

    Constraints
    Sorted array
*/



let arr = [1, 1, 2, 2, 3];

let index = 1;

for(let i=1; i < arr.length; i++){
    if(arr[i] !== arr[i - 1]){
        arr[index++] = arr[i];
    }
};
arr.length = index
console.log(arr);
