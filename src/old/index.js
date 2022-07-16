document.getElementById("app").innerHTML = `
<h1>DSA</h1>
`;

export function sumOfArr(A, n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    s = s + A[i];
  }
  return s;
}

export const make2DArr = (rows, cols) => {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
};

// console.log(make2DArr(5,5))

export const TwoDArr2 = (cols, rows) => {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      arr[i] = arr2;
      arr2[j] = j;
    }
  }

  return arr;
};

// console.log(TwoDArr2(5, 10));

// function which return 2D array with 1-5 number in each array
function TArray(numArr, insideArr) {
  let arr = [];
  console.log(arr);
  for (let i = 0; i < numArr; i++) {
    arr[i] = [...Array(insideArr)].fill().map((item, idx) => idx + 1);
  }
  return arr;
}

// console.log(TArray(10, 50)); // [[1,2,3,4,5],[1,2,3,4,5]]

//w3source questions
// Q.1 - Write a JavaScript function to check whether an `input` is an array or not.
//==== my approach
function is_array(arr) {
  if (Array.isArray(arr)) return true;
  return false;
}
// console.log(is_array('w3resource')); // false
// console.log(is_array([1, 2, 4, 0])); // true

//==== w3source approach
const is_array2 = (input) => {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};

// console.log(is_array2('w3resource')); // false
// console.log(is_array2([1, 2, 4, 0])); // true

//Q.3: Write a JavaScript function to clone an array.
//==== my approach -1
const array_Clone = (arr) => {
  if (!Array.isArray(arr)) return "please input valid Array";
  return arr.slice(0);
};
//==== my approach -2
const array_Clone2 = (arr) => {
  if (!Array.isArray(arr)) return "please input valid Array";
  return [...arr];
};
//==== my approach -3
const array_Clone3 = (arr) => {
  if (!Array.isArray(arr)) return "please input valid Array";
  return arr.map((item) => item);
};
//==== my approach -4
const array_Clone4 = (arr) => {
  if (!Array.isArray(arr)) return "please input valid Array";
  return arr.filter((item) => true);
};

//==== w3source approach
// console.log(array_Clone4("hell")); //please input valid Array
// console.log(array_Clone4([1, 2, 4, 0])); //[1, 2, 4, 0]
// console.log(array_Clone4([1, 2, [4, 0]])); //[1, 2, [4, 0]]

//Q.3  Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
/* 
Expected output
------------
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/

//  please note....
/*
I misunderstood the above question...
however I solved the question as per output
resolving the above question again 
*/
// *** this 'first' function *** (not as per the question)
// const first = (...args) => {
//   let argLen = args.length;
//   let arr = [];
//   let nonArr = [];
//   // itirate over parameters
//   // iteration option -I
//   for (let ar of args) {
//     if (Array.isArray(ar)) {
//       arr.push(ar);
//     } else {
//       nonArr.push(ar);
//     }
//   }

//   // iteration option -II
//   // for(let i=0; i<argLen; i++){
//   //   // divided the args array with two array
//   //  if(!Array.isArray(args[i])){
//   //    // if not an array then push to nonarray
//   //    nonArr.push(args[i]);
//   //  } else{
//   //    // push an array to Arr
//   //    arr.push(args[i]);
//   //  }
//   // }

//   // conditions
//   if (!nonArr[0]) {
//     // if theres if not nonArr Param
//     return arr.filter((item) => item[0])[0][0];
//   } else {
//     // if there is nonArr param
//     if (!arr.length) {
//       //then check the arr. is there any element in it
//       // if not elem then empty arr i.e. []
//       return (arr.length = 0);
//     } else {
//       // if element then map it
//       const newArr = arr.map((item) => {
//         // check if nonArr is greater than 6
//         if (nonArr[0] > 3) {
//           // if greater than 6 then return full array
//           return item.filter((ele) => true);
//         } else if (nonArr[0] < 0) {
//           return (arr.length = 0);
//         } else {
//           // then check and remove negetive number
//           return item.filter((ele) => ele >= 0);
//         }
//       });
//       return newArr[0];
//     }
//   }

//   // if parameter is an array and none arra < 3 ? return a new array with positive numbers : full array with positive and negative number
//   // if an non array in negative return []
// };

// re-solving the above question
// my way
function myfirst(arr, n) {
  if (!n) return arr[0];
  else if (n < 0) return [];
  else return arr.slice(0, n);
}

// w3source way
function first(arr, n) {
  if (!arr) return void 0;
  if (!n) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
}
/*
console.log(first([7, 9, 0, -2])); //7 ok
console.log(first([], 3)); //[] ok
console.log(first([7, 9, 0, -2], 3)); //[7, 9, 0] ok
console.log(first([7, 9, 0, -2], 6)); //[7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); //[]
// console.log(first("a", "b", "c", "d"));
*/

//4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
/*
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]

*/

let last = function (arr, n) {
  if (!arr) return "array required";
  if (!n) return arr[arr.length - 1];
  // return arr.reverse().slice(0, n).reverse();
  return arr.slice(arr.length - n);
};

console.log(last([7, 9, 0, -2])); //-2
console.log(last([7, 9, 0, -2], 3)); //[9, 0, -2]
console.log(last([7, 9, 0, -2], 6)); //[7, 9, 0, -2]

/*
5. Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
const myColor = ["Red", "Green", "White", "Black"];
function joinArrIntoString(arr) {
  return arr.join(",");
}
// console.log( joinArrIntoString(myColor))
