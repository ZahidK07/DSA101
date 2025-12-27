/*
    3️⃣ Previous Element Access → arr[i - 1]

    Why used?
    Compare with previous element
    Detect trends / changes

    Loop starts from i = 1
*/

let arr = [9, 0, 0, 8, 4, 4];
for(let i = 1; i < arr.length; i++){
  console.log(arr[i]);

  // curr index arr[i] checks ccoparison with Previous index arr[i-1] on every loop
  if (arr[i] === arr[i - 1]) console.log("Duplicate found");

};