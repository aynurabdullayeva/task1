// task1

// let a = [1,4,6,-4];

// for (i = 0; i < a.length ; i++){
//     if (a[i]>0){
//         console.log(a[i]+2);
//     }
// }



// task2

// let arr = [1,4,6,-4,7,9];

// for (i = 0; i < arr.length ; i++){
//     if (arr[i]%2==1){
//         console.log(arr[i]);
//     }
// }



// task3

// let arr = [1,4,6,3,7,9];
// let maxOlmadanCem = 0;
// let cem = 0;
// let max = -1;
// for (i = 0; i < arr.length ; i++){
//     if (max < arr[i]){
//         max = arr[i];
//     }
//     cem+=arr[i];
//     maxOlmadanCem = cem - max;
// }
// console.log(maxOlmadanCem);

// task4

// let arr = [1, 4, 6, 7, 3, 9];
// let largest = -Infinity;
// let secondLargest = -Infinity;
// let cem = 0;  
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] !== largest) {
//     secondLargest = arr[i];
//   }
//   cem = largest + secondLargest;
// }
// console.log(cem);