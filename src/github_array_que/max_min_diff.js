export const max_min_diff = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
};
// my approach
export const max_min_diff_b4_Highest_num1 = (arr) => {
  const max = Math.max(...arr);
  const maxIndex = arr.indexOf(max);
  const slicedArr = arr.slice(0, maxIndex + 1);
  const maxSliced = Math.max(...slicedArr);
  const min = Math.min(...slicedArr);
  return maxSliced - min;
};

// smart-shorterway
export const max_min_diff_b4_Highest_num = (arr) => {
  const result = arr.reduce((acc, curr, index, arr) => {
    const max = Math.max(...arr);
  }, 0);
  return result;
};
