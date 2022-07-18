// find maximum numebr
export function maxNumber(arr) {
  return Math.max(...arr);
}
// find lower number
export function minNumber(arr) {
  return Math.min(...arr);
}
// find max three number
export function max3Number(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.slice(arr.length - 3).reverse();
}
//find lower three number
export function min3Number(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr.slice(0, 3);
}
