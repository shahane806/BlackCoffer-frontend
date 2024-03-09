
const Title = (data,limit) => {
  return data.filter((e, i) => {
    return i < limit;
  });
}

export default Title
