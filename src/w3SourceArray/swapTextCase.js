export function swapTextCase1(str) {
  // string to an array
  // in that array find a elelment is uppercase or innercase
  // if innercase than uppercase
  // if uppercase than innercase
  // return the string

  const strArr = str.split("");
  const swapText = strArr.map((ele) => {
    if (ele === ele.toUpperCase()) {
      return ele.toLowerCase();
    } else {
      return ele.toUpperCase();
    }
  });
  return swapText.join("");
}

// shorter way
export function swapTextCase2(str) {
  return str
    .split("")
    .map((ele) =>
      ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
    )
    .join("");
}

// shortest way
export function swapTextCase(str) {
  return str
    .split("")
    .map((ele) =>
      ele.match(/^[A-Z]*$/) ? ele.toLowerCase() : ele.toUpperCase()
    )
    .join("");
}
