export const findElement = (types, value) => {
  const result = types.find((type) => type == value);

  if (result) {
    return true;
  } else {
    return false;
  }
};
