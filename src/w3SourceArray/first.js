export const first = (arr, n) => {
  if (!arr.length) return [];
  if (!n) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
};
