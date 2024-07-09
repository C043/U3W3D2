import { COMPANY_JOBS, HAS_ERROR_OFF, HAS_ERROR_ON, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

const initialState = {
  isLoading: false,
  hasError: false,
  content: [],
};

const companyJobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    case IS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case IS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case HAS_ERROR_ON:
      return {
        ...state,
        hasError: true,
      };
    case HAS_ERROR_OFF:
      return {
        ...state,
        hasError: false,
      };
    default:
      return state;
  }
};

export default companyJobsReducer;
