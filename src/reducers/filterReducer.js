const reducer = (state = "", action) => {
  console.log("Filter state now:", state);
  console.log("Filter action:", action);

  switch (action.type) {
    case "SET_FILTER":
      return action.payload.filter;
    case "CLEAR_FILTER":
      return "";
    default:
      return state;
  }
}

export const setFilter = filter => {
  return {
    type: "SET_FILTER",
    payload: { filter: filter }
  };
}

export default reducer;
