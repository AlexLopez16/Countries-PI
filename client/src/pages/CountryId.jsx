import { Navbar } from '../components/ui'
import { useSelector, useDispatch } from 'react-redux';
import { ActivitiesList } from '../components/activities/ActivitiesList';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCountries, getCountryById } from './../actions/countries';
import { Activities } from './Activities';
import { PageNotFound } from './404Page';

export const CountryId = () => {

    const dispatch = useDispatch()
    const { countryById } = useSelector(state => state.countries)
    const { countries } = useSelector(state => state.countries)
    const { pathname } = useHistory().location

    const [_, path, id] = pathname.split('/')

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getCountryById(id))
    }, [dispatch, id])

    const onlyId = countries.map(country => country.id).includes(id)

    return (
        <>
            {
                id.length > 3 && (<PageNotFound />)
            }
            {
                !onlyId && (<PageNotFound />)
            }
            <Navbar />
            {
                countryById.length
                    ? <>
                        <h1 style={{ padding: '20px' }}>Activities in this country</h1>
                        <ActivitiesList />
                    </>
                    : <h1 style={{ textAlign: 'center', color: 'red', height: '100vh' }}>THIS COUNTRY DON'T HAVE ACTIVITIES</h1>
            }

        </>
    )
}
