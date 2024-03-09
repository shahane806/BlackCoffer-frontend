const FilterId = (data) => {
  const filterId = data?.[0] != null ? Object.keys(data?.[0]) : [];
  return filterId;
};

export default FilterId;
