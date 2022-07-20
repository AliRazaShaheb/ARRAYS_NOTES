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

// Solution -2 deepa chaurasiya linkedin (hash method)
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

// Solution -3 sorting method
export const TwoSum = (arr, target) => {
  // result container array
  const result = [];
  // sorted the incoming array
  arr.sort((a, b) => a - b);

  // custom pointers
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[leftPointer] + arr[rightPointer] === target) {
      return [arr[leftPointer], arr[rightPointer]];
    } else if (arr[leftPointer] + arr[rightPointer] < target) {
      leftPointer++;
    } else if (arr[leftPointer] + arr[rightPointer] > target) {
      rightPointer--;
    }
  }

  return result;
};
