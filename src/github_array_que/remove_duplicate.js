//my approach
export function remove_duplicate1(arr) {
  let unique_number = {};
  let unique_arr = [];
  for (let i = 0; i < arr.length; i++) {
    unique_number[arr[i]] = arr[i];
  }
  for (let value of Object.values(unique_number)) {
    unique_arr.push(value);
  }
  return unique_arr;
}

// approach -2
export function remove_duplicate2(arr) {
  let unique_obj = {};
  let unique_arr = [];
  for (let i = 0; i < arr.length; i++) {
    // unique_obj[arr[i]] = arr[i];
    // object always have unique key
    // giving object array value as key

    // object undefined key
    if (!unique_obj.hasOwnProperty(arr[i])) {
      // here object giving key with any value
      // array value in obj key will be set unique
      unique_obj[arr[i]] = true;
      // pushing the arr value
      unique_arr.push(arr[i]);
    }
  }
  return unique_arr;
}

// NEW ES-6 way to get unique key
// shortest way
export function remove_duplicate3(arr) {
  return [...new Set(arr)];
}

// little long way;
export function remove_duplicate(arr) {
  let set = new Set(arr);
  let arr1 = [...set];
  return arr1;
}
