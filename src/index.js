import "./styles.css";
import {
  array_Clone_Slice,
  array_Clone_Map,
  array_Clone_Filter,
  array_Clone_Spread
} from "./w3SourceArray/array_Clone";
import { first } from "./w3SourceArray/first";
import { is_array, is_array_toString } from "./w3SourceArray/is_array";
import { joinArray } from "./w3SourceArray/joinArray";
import { last, last1, last2 } from "./w3SourceArray/last";
import { numberSeparator } from "./w3SourceArray/numberSeparator";

console.clear();
/* 1.
 Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
*/
// ***** solution-1 *****
// console.log(is_array("w3resource")); // false
// console.log(is_array([1, 2, 4, 0])); // true

// ***** solution-2 *****
// console.log(is_array_toString("w3resource")); // false
// console.log(is_array_toString([1, 2, 4, 0])); // true

/* 2.
 Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/
// ***** solution-1 (array.prototype.slice()) *****
// console.log(array_Clone_Slice([1, 2, 4, 0]));
// console.log(array_Clone_Slice([1, 2, [4, 0]]));

// ***** solution-2 (array.prototype.map()) *****
// console.log(array_Clone_Map([1, 2, 4, 0]));
// console.log(array_Clone_Map([1, 2, [4, 0]]));

// ***** solution-3 (array.prototype.filter()) *****
// console.log(array_Clone_Filter([1, 2, 4, 0]));
// console.log(array_Clone_Filter([1, 2, [4, 0]]));

// ***** solution-4 (Array spread syntax (...)) *****
// console.log(array_Clone_Spread([1, 2, 4, 0]));
// console.log(array_Clone_Spread([1, 2, [4, 0]]));

/* 3. 
 Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
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
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

/* 4.
 Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. Go to the editor
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/
// ***** solution-1 (array.prototype.slice() & reverse()) *****
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// ***** solution-2 (array.prototype.slice() & Math.max()) *****
// console.log(last1([7, 9, 0, -2]));
// console.log(last1([7, 9, 0, -2], 3));
// console.log(last1([7, 9, 0, -2], 6));

// ***** solution-3 (array.prototype.slice() & Math.max()) *****
// console.log(last2([7, 9, 0, -2]));
// console.log(last2([7, 9, 0, -2], 3));
// console.log(last2([7, 9, 0, -2], 6));

/* 5.
 Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
let myColor = ["Red", "Green", "White", "Black"];
// console.log(joinArray(myColor, " + "));

/*6.
6. Write a JavaScript program 
which accept a number as input and 
insert dashes (-) between each two even numbers. 
For example if you accept 025468 
the output should be 0-254-6-8.
*/
console.log(numberSeparator("025468", "-"));
