import { types } from '../types/types';

const initialState = {
    continentsUI: [],
    activitiesUI: [],
    currentPage: ''
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiFiltersContinents:
            return {
                ...state,
                continentsUI: [...action.payload]
            }

        case types.uiFiltersActivities:
            return {
                ...state,
                activitiesUI: [...action.payload]
            }

        case types.uiCurrentPage:
            return {
                ...state,
                currentPage: action.payload
            }

        default:
            return state;
    }
}

