export const rearrange_2D_array = (arr) => {
  // var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  // start with simpel
  for (let i = 0; i < arr.length; i++) {
    console.log(`row ${i}`);
    for (let value of arr[i]) {
      console.log(value);
    }
  }
};

// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
