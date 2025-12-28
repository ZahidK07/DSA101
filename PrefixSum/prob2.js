/*
     HOW Prefix Array is Built (Line-by-Line)
*/
//Output prefix = [2, 6, 12, 20]

let arr = [2, 4, 6, 8];
let prefix = [];
prefix[0] = arr[0];
// console.log(prefix);


for(let i=1; i < arr.length; i++){
  
  arr[i];        //4 6 8
  console.log(arr, "arr");
  
  prefix[i - 1]; //2 6 12


  prefix[i] = prefix[i - 1] + arr[i]; //2 6 12 20
  console.log(prefix, "prefix");
};
// console.log(arr,'\n',prefix);

