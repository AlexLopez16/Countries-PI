import { types } from './../types/types';

const initialState = {
    activities: [],
    activityCreated: [],
    activityUpdated: '',
    toUpdate: {}
}

export const activitiesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.activityGetAll:
            return {
                ...state,
                activities: [...action.payload]
            }

        case types.activityAddNew:
            return {
                ...state,
                activityCreated: action.payload
            }

        case types.activityUpdate:
            return {
                ...state,
                activityUpdated: action.payload
            }

        case types.activityDelete:
            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload)
            }

        case types.activityToUpdate:
            return {
                ...state,
                toUpdate: action.payload
            }

        default:
            return state;
    }
}