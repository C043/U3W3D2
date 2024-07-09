export const QUERY = "QUERY";
export const JOBS = "JOBS";
export const COMPANY_JOBS = "COMPANY_JOBS";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

export const queryAction = e => ({ type: QUERY, payload: e.target.value });
export const jobsAction = data => ({ type: JOBS, payload: data });
export const companyJobsAction = data => ({ type: COMPANY_JOBS, payload: data });
export const addToFavoritesAction = data => ({ type: ADD_TO_FAVORITES, payload: data });
export const removeFromFavoritesAction = data => ({ type: REMOVE_FROM_FAVORITES, payload: data._id });
