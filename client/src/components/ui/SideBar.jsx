import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivitiesUi, getContinents } from './../../actions/ui';
import { setActiveFilterActivity, setActiveFilterContinents } from './../../actions/countries';

import '../../styles/ui/sidebar.css'
import { getActivities } from './../../actions/activities';

export const SideBar = () => {

    const initialState = {
        "Africa": false,
        "Antarctica": false,
        "Asia": false,
        "Europe": false,
        "North America": false,
        "Oceania": false,
        "South America": false,
    }

    const dispatch = useDispatch();

    const { continentsUI, activitiesUI } = useSelector(state => state.ui)
    const [isChecked, setIsChecked] = useState(initialState)
    const [filterContinent, setFilterContinent] = useState([])
    const { activities } = useSelector(state => state.activities)
    const [filterActivities, setFilterActivities] = useState([])
    const [checkActivity, setCheckActivity] = useState({})

    useEffect(() => {
        dispatch(getContinents())
        dispatch(getActivitiesUi())
        dispatch(getActivities())
    }, [dispatch])

    useEffect(() => {
        dispatch(setActiveFilterContinents(filterContinent))
    }, [dispatch, filterContinent])

    useEffect(() => {
        dispatch(setActiveFilterActivity(filterActivities))
    }, [dispatch, filterActivities])


    const handleChange = (e) => {
        setIsChecked({
            ...isChecked,
            [e.target.id]: !isChecked[e.target.id]
        })

        if (!e.target.checked) {
            const filter = filterContinent.filter(continent => {
                return continent !== e.target.value
            })
            return setFilterContinent([...filter])
        }
        setFilterContinent([...filterContinent, e.target.value])
    }

    const handleClick = (e) => {
        setIsChecked(initialState)
        setFilterContinent([])
    }

    const handleActivities = (e) => {

        if (!e.target.checked) {
            setCheckActivity({
                ...checkActivity,
                [e.target.id]: false
            })
        }

        for (const activity of activities) {
            if (activity.name === e.target.value) {
                if (!e.target.checked) {
                    const filter = filterActivities.filter(country => {
                        return !activity.Countries.map(country => country.name).includes(country)
                    })
                    return setFilterActivities([...filter])
                }
                setFilterActivities([...filterActivities, ...activity.Countries.map(country => country.name)])
            }
        }

        if (e.target.checked) {
            setCheckActivity({
                ...checkActivity,
                [e.target.id]: true
            })
        }
    }

    const handleRemoveActivities = (e) => {
        if (Object.keys(checkActivity).length) {
            for (const key of Object.keys(checkActivity)) {
                setCheckActivity({ [key]: false })
            }
        }
        setFilterActivities([])
    }

    return (
        <div className='sidebar-container'>
            <div className="filter">
                <h3>Filters</h3>
                <button hidden>Remove All</button>
            </div>
            <hr />
            <div className="filter">
                <p>Continents</p>
                <button onClick={handleClick}>Remove</button>
            </div>
            {
                continentsUI.map((continent) => (
                    <div className="elements" key={continent}>
                        <label htmlFor={continent}>{continent}</label>
                        <input type="checkbox" value={continent} id={continent} onChange={handleChange} checked={isChecked[continent]} />
                    </div>
                ))
            }
            <hr />
            <div className="filter">
                <p>Activities</p>
                <button onClick={handleRemoveActivities}>Remove</button>
            </div>
            {
                activitiesUI.map((activity) => (
                    <div className="elements" key={activity}>
                        <label htmlFor={activity}>{activity}</label>
                        <input
                            type="checkbox"
                            value={activity}
                            id={activity}
                            onChange={handleActivities}
                            checked={checkActivity[activity]}
                        />
                    </div>
                ))
            }
        </ div>
    );
};