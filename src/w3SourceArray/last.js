export const last = (arr, n) => {
  if (!arr.length) return "arr length";
  if (!n) return arr[arr.length - 1];
  let customArr = arr.reverse();
  return arr;
};
