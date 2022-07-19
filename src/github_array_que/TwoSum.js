// solution - 1
// solved by Brute force
/**
 * The Big-O notation of this solution would be O(n^2)
 * for time complexity and O(1) for space complexity,
 * which indicates that it is not a
 * very efficient solution for
 * how fast it solves the problem.
 */

export const TwoSum1 = (arr, target) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        // for value shown in result
        result.push(arr[i], arr[j]);
        // for index show in result
        result.push(i, j);
        return result;
      }
    }
  }
  return result;
};

// Solution -2 deepa chaurasiya linkedin
export const TwoSum2 = (arr, target) => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    if (target - arr[i] in result) {
      return [result[target - arr[i]], i];
    } else {
      result[arr[i]] = i;
    }
  }
  return result;
};

// solution -3 (same as solution 2) hashing method

// export const Twosum = (arr, target) => {
//   const result = {};
//   for (const number of arr) {
//     let desiredOutput = target - number;
//     if (desiredOutput in result) {
//       [desiredOutput, number];
//     } else {
//       result[number] = true;
//     }
//   }
//   return [];
// };

// export function Twosum(array, targetSum) {
//   let numbersObject = {};
//   for (const number of array) {
//     let numberWeAreChecking = targetSum - number;
//     if (numberWeAreChecking in numbersObject) {
//       return [numberWeAreChecking, number];
//     } else {
//       numbersObject[number] = true;
//     }
//   }
//   return [];
// }
