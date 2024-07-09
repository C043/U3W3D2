export const JOBS = "JOBS";
export const COMPANY_JOBS = "COMPANY_JOBS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const HAS_ERROR_ON = "HAS_ERROR_ON";
export const IS_LOADING_ON = "IS_LOADING_ON";
export const HAS_ERROR_OFF = "HAS_ERROR_OFF";
export const IS_LOADING_OFF = "IS_LOADING_OFF";

export const isNotLoading = () => ({ type: IS_LOADING_OFF });
export const isLoading = () => ({ type: IS_LOADING_ON });
export const hasError = () => ({ type: HAS_ERROR_ON });
export const hasNotError = () => ({ type: HAS_ERROR_OFF });
export const jobsAction = data => ({ type: JOBS, payload: data });
export const getJobsAction = query => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async dispatch => {
    dispatch(isLoading());
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(jobsAction(data));
        dispatch(hasNotError());
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
      dispatch(hasError());
    } finally {
      dispatch(isNotLoading());
    }
  };
};

export const companyJobsAction = data => ({ type: COMPANY_JOBS, payload: data });
export const getCompanyJobsAction = params => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  return async dispatch => {
    dispatch(isLoading());
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(companyJobsAction(data));
        dispatch(hasNotError());
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
      dispatch(hasError());
    } finally {
      dispatch(isNotLoading());
    }
  };
};
export const addToFavoritesAction = data => ({ type: ADD_TO_FAVORITES, payload: data });
export const removeFromFavoritesAction = data => ({ type: REMOVE_FROM_FAVORITES, payload: data._id });
