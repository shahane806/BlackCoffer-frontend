const dataReducer = (state = [], action) => {
  switch (action.type) {
    case "fetchData": {
      return state = action?.payload ;
    }
    default:
      return state;
  }
};

export default dataReducer;
