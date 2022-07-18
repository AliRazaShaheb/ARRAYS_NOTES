export const maxElementOccurance = (arr) => {
  let mf = 1;
  let m = 0;
  let item;
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) m++;
      if (mf < m) {
        mf = m;
        item = arr[i];
      }
    }
    m = 0;
  }
  return `${item} ( ${mf} times )`;
};
