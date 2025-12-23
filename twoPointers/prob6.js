/*
    6️⃣ Move All Zeros to End

    arr = [0, 1, 0, 3, 12]
    Output: [1, 3, 12, 0, 0]

    Hints
    One pointer tracks non-zero position

    Constraints
    1 ≤ n ≤ 10⁵
*/

let arr = [0, 1, 0, 3, 12]
let left = 0;

for (let right = 0; right < arr.length; right++) {

  if (arr[right] !== 0) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; //swap elements if condition true
    left++; // if true then increment left element and push to right
  }
};
console.log(arr);

let strArr = ["left", "right", "right", "left", "right"];
//Output = ["right", "right", "right", "left", "left"];

let l = 0;
for(let r=0; r < strArr.length; r++){

    // if we do !== left / so this will move all left right
    // if we do === left / so this keep all left to left this
    if(strArr[r] !== "left"){
        [strArr[l], strArr[r]] = [strArr[r], strArr[l]]
        l++;
    }

};
console.log(strArr, "all left str moved to right");
