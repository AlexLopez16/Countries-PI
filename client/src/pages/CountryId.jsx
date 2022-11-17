import { Navbar } from '../components/ui'
import { useSelector, useDispatch } from 'react-redux';
import { ActivitiesList } from '../components/activities/ActivitiesList';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCountryById } from './../actions/countries';
import { Activities } from './Activities';

export const CountryId = () => {

    const dispatch = useDispatch()
    const { countryById } = useSelector(state => state.countries)
    const { pathname } = useHistory().location

    const [_, path, id] = pathname.split('/')

    useEffect(() => {
        dispatch(getCountryById(id))
    }, [dispatch, id])


    return (
        <>
            <Navbar />
            {
                countryById.length
                    ? <>
                        <h1 style={{ padding: '20px' }}>Activities in this country</h1>
                        <ActivitiesList />
                    </>
                    : <h1 style={{ textAlign: 'center', color: 'red' }}>THIS COUNTRY DON'T HAVE ACTIVITIES</h1>
            }

        </>
    )
}
