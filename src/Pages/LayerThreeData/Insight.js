
const Insight = (DataObj,j,count) => {
  return DataObj.filter((e, i) => {
    return i < count;
  })
  .slice(j, count);
}

export default Insight
