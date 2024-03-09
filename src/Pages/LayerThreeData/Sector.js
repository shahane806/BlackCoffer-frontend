
const Sector = (DataObj,j,count) => {
  return DataObj.filter((e, i) => {
    return i < count;
  })
  .slice(j, count);
}

export default Sector
