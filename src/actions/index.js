export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const removeFeature = feature => {
  // dispatch an action here to remove an item
  return {
    type: "REMOVE_FEATURE",
    payload: feature
  };
};

export const BUY_FEATURE = "BUY_FEATURE";
export const buyFeature = feature => {
  // dipsatch an action here to add an item
  return {
    type: "BUY_FEATURE",
    payload: feature
  };
};
