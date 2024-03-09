
const Impact = (data,limit) => {
  return data.filter((e, i) => {
    return i < limit;
  });
}

export default Impact
