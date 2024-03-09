
const EndYear = (data,limit) => {
  return data.filter((e, i) => {
    return i < limit;
  });
}

export default EndYear
