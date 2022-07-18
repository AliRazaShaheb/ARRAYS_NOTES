export function findMissingNumber(arr) {
  // find min value
  const minValue = Math.min(...arr);

  // find max value
  const maxValue = Math.max(...arr);

  // loop over and make sum of array
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const val1 =
    (maxValue * (maxValue + 1)) / 2 - (minValue * (minValue - 1)) / 2;

  return val1 - sum;
  // Find theoretical sum of the consecutive numbers using a variation of Gauss Sum.
  // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
  // N is the upper bound and M is the lower bound
}
