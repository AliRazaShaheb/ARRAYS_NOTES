export const last = (arr, n) => {
  if (!arr.length) return "arr length";
  if (!n) return arr[arr.length - 1];
  let customArr = arr.reverse();
  return customArr.slice(0, n).reverse();
};

export const last1 = (arr, n) => {
  if (!arr.length) return [];
  if (!n) return arr[arr.length - 1];
  return arr.slice(-n);
};

export const last2 = (arr, n) => {
  if (!arr.length) return [];
  if (!n) return arr[arr.length - 1];
  return arr.slice(Math.max(arr.length - n, 0));
};
