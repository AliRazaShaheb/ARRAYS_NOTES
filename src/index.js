import "./styles.css";
import {
  array_Clone_Slice,
  array_Clone_Map,
  array_Clone_Filter,
  array_Clone_Spread
} from "./w3SourceArray/array_Clone";
import { first } from "./w3SourceArray/first";
import { is_array, is_array_toString } from "./w3SourceArray/is_array";
import { last } from "./w3SourceArray/last";

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
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));