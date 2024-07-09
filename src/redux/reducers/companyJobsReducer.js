import { COMPANY_JOBS } from "../actions";

const initialState = {
  content: [],
};

const companyJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default companyJobsReducer;
