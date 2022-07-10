console.clear();
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>DSA</h1>
`;

export function sumOfArr(A, n) {
  let s = 0;
  for (let i = 0; i < n; i++) {
    s = s + A[i];
  }
  return s;
}

export const make2DArr = (rows, cols) => {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
};

// console.log(make2DArr(5,5))

export const TwoDArr2 = (cols, rows) => {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      arr[i] = arr2;
      arr2[j] = j;
    }
  }

  return arr;
};

// console.log(TwoDArr2(5, 10));

// function which return 2D array with 1-5 number in each array
function TArray(numArr, insideArr) {
  let arr = [];
  console.log(arr);
  for (let i = 0; i < numArr; i++) {
    arr[i] = [...Array(insideArr)].fill().map((item, idx) => idx + 1);
  }
  return arr;
}

console.log(TArray(10, 50)); // [[1,2,3,4,5],[1,2,3,4,5]]
