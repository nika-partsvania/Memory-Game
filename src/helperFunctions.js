export const shuffle = (arr) => {
  let m = arr.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
};

export const compareSequences = (a, b) => {
  return a.length === b.length && a.every((val, index) => val === b[index]);
};
