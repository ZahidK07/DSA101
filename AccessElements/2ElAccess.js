/*
    2️⃣ Next Element Access → arr[i + 1]

    Why used?
    To compare current vs next

    Adjacent comparisons

    Example Use Case

    ✔ Sorted check
    ✔ Adjacent duplicates
    ✔ Increasing sequence

    ⚠️ Important Rule
    Stop loop at length - 1
*/

arr = [0, 4, 5, 3, 10];
for(let i = 0; i < arr.length-1; i++){

    // current element arr[i] checks condition with next elements arr[i+1] 
    if(arr[i] > arr[i + 1]) console.log(" Sorted");
    else console.log("Not Sorted");
};  
