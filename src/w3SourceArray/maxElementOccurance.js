export const maxElementOccurance1 = (arr) => {
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

export const maxElementOccurance2 = (arr) => {
  //if array length is not 0 then move further
  if (!arr.length) return null;
  const obj = {};
  let frequentValue = 0,
    maxCount = 1;

  //itirate over array
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (!obj[el]) obj[el] = 1;
    else obj[el]++;

    if (obj[el] > maxCount) {
      maxCount = obj[el];
      frequentValue = el;
    }
  }
  return {
    obj,
    frequentValue,
    maxCount
  };
};

export const maxElementOccurance = (arr) => {
  //if array length is not 0 then move further
  if (!arr.length) return null;
  const obj = {};
  let frequentValue = 0,
    maxCount = 1;

  //itirate over array
  for (let el of arr) {
    !obj[el] ? (obj[el] = 1) : obj[el]++;
    obj[el] > maxCount && ((maxCount = obj[el]), (frequentValue = el));
  }
  return {
    obj,
    frequentValue,
    maxCount
  };
};
