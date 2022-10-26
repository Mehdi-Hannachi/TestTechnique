exports.points = (types, weaknesses) => {
  let res = 0;
  for (let i = 0; i <= types.length; i++) {
    weaknesses.find((el) => el == types[i]) ? (res = res + 1) : res;
  }
  return res;
};
