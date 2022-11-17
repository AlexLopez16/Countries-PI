import { types } from './../types/types';

const initialState = {
    countries: [],
    countryById: [],
    countriesFilters: [],
    activeFilterBy: null,
    activeFilterContinents: [],
    countrySearch: '',
    countriesFilterActivity: [],
    activeFilterActivity: []
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.countriesLoaded:
            return {
                ...state,
                countries: [...action.payload]
            }

        case types.countriesByName:
            return {
                ...state,
                countries: [...action.payload]
            }

        case types.countriesById:
            return {
                ...state,
                countryById: [...action.payload]
            }

        case types.countriesSetFilterBy:
            const isFiltered = state.countriesFilters;
            const [, filter] = action.payload.split(' ');
            const countries = (isFiltered.length) ? state.countriesFilters : state.countries
            const filters = {
                'A-Z': () => {
                    return countries.sort((a, b) => {
                        const firstE = a.name.toLowerCase();
                        const seconE = b.name.toLowerCase();

                        if (firstE < seconE) return -1;
                        if (firstE > seconE) return 1;
                        return 0;
                    })
                },
                'Z-A': () => {
                    return countries.sort((a, b) => {
                        const firstE = a.name.toLowerCase();
                        const seconE = b.name.toLowerCase();

                        if (firstE > seconE) return -1;
                        if (firstE < seconE) return 1;
                        return 0;
                    })
                },
                'Ascending': () => {
                    return countries.sort((a, b) => a.population - b.population)
                },
                'Descendant': () => {
                    return countries.sort((a, b) => b.population - a.population)
                }
            }

            const stateName = (isFiltered.length) ? 'countriesFilters' : 'countries'
            return {
                ...state,
                activeFilterBy: action.payload,
                [stateName]: filters[filter] ? filters[filter]() : []
            }

        case types.countriesSetFilterContinent:
            const newArray = [...state.countries]
            const result = newArray.filter(({ continent }) => action.payload.includes(continent))

            return {
                ...state,
                countriesFilters: result,
                activeFilterContinents: action.payload
            }

        case types.countriesSetFilterActivity:
            const newArray2 = [...state.countries]
            const result2 = newArray2.filter(({ name }) => action.payload.includes(name))

            return {
                ...state,
                countriesFilters: result2,
                activeFilterActivity: action.payload
            }

        case types.countriesSearch:
            return {
                ...state,
                countrySearch: action.payload
            }

        case types.countriesClearContryId:
            return {
                ...state,
                countryById: []
            }

        default:
            return state;
    }
}