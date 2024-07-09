export const JOBS = "JOBS";
export const COMPANY_JOBS = "COMPANY_JOBS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const jobsAction = data => ({ type: JOBS, payload: data });
export const getJobsAction = query => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async dispatch => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(jobsAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const companyJobsAction = data => ({ type: COMPANY_JOBS, payload: data });
export const getCompanyJobsAction = params => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  return async dispatch => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(companyJobsAction(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const addToFavoritesAction = data => ({ type: ADD_TO_FAVORITES, payload: data });
export const removeFromFavoritesAction = data => ({ type: REMOVE_FROM_FAVORITES, payload: data._id });
