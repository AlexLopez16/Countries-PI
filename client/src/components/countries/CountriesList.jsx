import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, setCountrySearch } from './../../actions/countries';
import { CountryCard } from './CountryCard';

import '../../styles/components/countryList.css';

export const CountriesList = () => {

    const { countries } = useSelector(state => state.countries)
    const { countriesFilters } = useSelector(state => state.countries)
    const { currentPage } = useSelector(state => state.ui)
    const { countrySearch } = useSelector(state => state.countries)
    const arrayCountries = (countriesFilters.length) ? countriesFilters : countries

    let firstIndx = 0
    let lastIndx = 0

    if (currentPage !== 1) {
        lastIndx = (currentPage * 10) - 1;
        firstIndx = lastIndx - 10
    }

    const countryPagination = () => {
        if (currentPage === 1) {
            return arrayCountries.slice(0, 9)
        }
        return arrayCountries.slice(firstIndx, lastIndx)
    }

    const dispatch = useDispatch();

    useEffect(() => {

        countrySearch
            ? dispatch(setCountrySearch(countrySearch))

            : dispatch(getCountries())
    }, [dispatch])
    
    return (
        <div className='container-group'>
            {
                countryPagination().map(({ id, name, flag, continent, capital, subregion, area, population }) => (
                    <div className='element' key={id}>
                        <CountryCard
                            id={id}
                            name={name}
                            flag={flag}
                            continent={continent}
                            capital={capital}
                            subregion={subregion}
                            area={area}
                            population={population}
                        />
                    </div>
                ))
            }
        </div>
    )
}
