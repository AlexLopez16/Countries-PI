import axios from 'axios';
import { types } from './../types/types';

export const getContinents = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/countries')

            const continents = [...new Set(
                data.map(({ continent }) => continent).sort()
            )]

            return dispatch({
                type: types.uiFiltersContinents,
                payload: continents
            })

        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const getActivitiesUi = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/activities')

            const activities = [...new Set(
                data.map(({ name }) => name).sort()
            )]

            return dispatch({
                type: types.uiFiltersActivities,
                payload: activities
            })

        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const actualPage = (currentPage) => ({
    type: types.uiCurrentPage,
    payload: currentPage
})

