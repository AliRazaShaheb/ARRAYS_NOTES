import { max3Number, maxNumber, min3Number, minNumber } from "./find_max_num";
import { findMissingNumber } from "./find_missing_number";
import { max_min_diff, max_min_diff_b4_Highest_num } from "./max_min_diff";
import { remove_duplicate } from "./remove_duplicate";

console.clear();

let sampleArray = [5, 6, 4, 1, 2, 3, 8, 9];
// Q1: find missing number
// console.log(findMissingNumber(sampleArray)); //7

//Q2 : remove duplicate number
var array = [1, 2, 3, 5, 4, 6, 7, 1, 5, 9, 1, 2, 8];
var array1 = [78, 85, 95, 25, 14, 6, 67];
var array_string = ["ali", "raza", "shamsher", "ali", "abdul", "ali"];

// console.log(remove_duplicate(array_string));

//Q3: find max number in an array
// console.log(maxNumber(array));

//Q4: find min number in an array
// console.log(minNumber(array));

//Q5: find min number in an array
// console.log(minNumber(array));

//Q6: find max 3 number in an array
// console.log(max3Number(array1));

//Q7: find min 3 number in an array
// console.log(min3Number(array1));

var arrayDifference = [7, 8, 4, 9, 9, 15, 3, 1, 10];
//Q.8 find difference in an array between maxvalue and minvalue of an array
// console.log(max_min_diff(arrayDifference));

/* Q.9
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.
*/
// console.log(max_min_diff_b4_Highest_num(arrayDifference));
