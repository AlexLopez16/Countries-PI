import axios from 'axios';
import { types } from './../types/types';

export const getCountries = () => {
    return async (dispatch) => {

        try {
            const countries = await axios.get(`/countries`)

            return dispatch({
                type: types.countriesLoaded,
                payload: countries.data
            })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
            const country = await axios.get(`/countries?name=${name}`)

            return dispatch({
                type: types.countriesByName,
                payload: country.data
            })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const getCountryById = (id) => {
    return async (dispatch) => {
        try {
            const country = await axios.get(`/countries/${id}`)

            return dispatch({
                type: types.countriesById,
                payload: country.data.Activities
            })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const setActiveFilterBy = (filter) => ({
    type: types.countriesSetFilterBy,
    payload: filter
})

export const setActiveFilterContinents = (filters) => ({
    type: types.countriesSetFilterContinent,
    payload: filters
})

export const setActiveFilterActivity = (filters) => ({
    type: types.countriesSetFilterActivity,
    payload: filters
})

export const setCountrySearch = (name) => ({
    type: types.countriesSearch,
    payload: name
})

export const clearCountryById = () => ({
    type: types.countriesClearContryId
})