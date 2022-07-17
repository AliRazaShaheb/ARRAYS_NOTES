export const numberSeparator = (n, str = "-") => {
  if (!n) return "please give number for seprate";
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0 && n[i - 1] % 2 === 0) {
      arr.push(str);
    }
    arr.push(n[i]);
  }
  return arr.join("");
};
