import axios from 'axios';
import { types } from './../types/types';

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const activities = await axios.get('/activities')

            return dispatch({
                type: types.activityGetAll,
                payload: activities.data
            })

        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const newActivity = (activity) => {
    return async (dispatch) => {
        try {
            const newActivity = await axios.post('/activities', activity)

            return dispatch({
                type: types.activityAddNew,
                payload: newActivity.data
            })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const startUpdateActivity = (id, activity) => {
    return async (dispatch) => {
        try {
            const activityUpdate = await axios.put(`/activities/${id}`, activity);
            console.log(activityUpdate)

            return dispatch({
                type: types.activityUpdate,
                payload: activityUpdate.data
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const startDeleting = (id) => {
    return async (dispatch) => {
        try {
            const activityDeleted = await axios.delete(`/activities/${id}`)
            console.log(activityDeleted);
            dispatch(deleteActivity(id))
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteActivity = (id) => ({
    type: types.activityDelete,
    payload: id
})

export const activityToUpdate = (activity) => ({
    type: types.activityToUpdate,
    payload: activity
})