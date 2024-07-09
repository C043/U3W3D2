import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoritesReducer";
import companyJobsReducer from "../reducers/companyJobsReducer";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  companyJobs: companyJobsReducer,
  favorites: favoriteReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
