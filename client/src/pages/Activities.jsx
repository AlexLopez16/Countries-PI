import { useState, useEffect } from 'react';
import { Form } from '../components/activities/Form';
import { Navbar } from "../components/ui"
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from './../actions/activities';
import { ActivitiesList } from '../components/activities';


import '../styles/pages/activitiesPage.css';
import { clearCountryById } from '../actions/countries';
export const Activities = () => {
    const [openModal, setOpenModal] = useState(false)
    const { activities } = useSelector(state => state.activities)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getActivities())
        dispatch(clearCountryById())
    }, [dispatch, openModal])

    return (
        <div>
            <Navbar />

            <div className='newActivity'>
                <button className='activity-btn' onClick={() => setOpenModal(!openModal)}>Create a new activity</button>
            </div>

            {
                activities.length > 0
                    ? <ActivitiesList
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                    />
                    : <h1 className='error-title'>NO ACTIVITIES TO SHOW, PLEASE CREATE A NEW ONE</h1>
            }
            <Form
                openModal={openModal}
                setOpenModal={setOpenModal}
            />

        </div >
    )
}
