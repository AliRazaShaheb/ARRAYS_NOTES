export const is_array = (arr) => {
  // toString.call(arr) // [object Array]
  // toString.call() return [object typeof ] in string formate
  // to toString return original Object/class i.e. new Boolean(), String(), Number(), Object(), Array()
  // console.log(toString.call(arr));
  if (!Array.isArray(arr)) return false;
  return true;
};

export const is_array_toString = (arr) => {
  if (toString.call(arr) === "[object Array]") return false;
  return true;
};
