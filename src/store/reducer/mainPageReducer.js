import * as Actions from "../actions/actionTypes";

const initialState = {
  selectedRegion: "asia",
  regions: ["asia", "europe", "americas", "ocenia", "africa"]
};

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_REGIONS_ON_INIT: {
      const regions = { ...state };
      return {
        regions: regions.selectedRegion,
        selectedRegion: state.selectedRegion
      };
    }
    default:
      return state;
  }
};

export default mainPageReducer;
