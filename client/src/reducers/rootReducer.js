import { combineReducers } from "redux";
import { countriesReducer } from './countriesReducer';
import { uiReducer } from './uiReducer';
import { activitiesReducer } from './activitiesReducer';


export const rootReducer = combineReducers({
    countries: countriesReducer,
    ui: uiReducer,
    activities:activitiesReducer
})