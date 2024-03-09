
const Region = (data,limit) => {
  return data.filter((e, i) => {
    return i < limit;
  });
}

export default Region
