import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activityToUpdate, newActivity } from '../../actions/activities';
import { getCountries } from './../../actions/countries';
import { startUpdateActivity } from './../../actions/activities';

import "../../styles/components/form.css";

export const Form = ({ openModal, setOpenModal }) => {
    const difficults = ["1", "2", "3", "4", "5"]
    const seasons = ['Summer', 'Spring', 'Fall', 'Winter']
    const { countries } = useSelector(state => state.countries)
    countries.sort((a, b) => {
        const firstE = a.name.toLowerCase();
        const seconE = b.name.toLowerCase();

        if (firstE < seconE) return -1;
        if (firstE > seconE) return 1;
        return 0;
    })

    const { activities } = useSelector(state => state.activities)
    const { toUpdate } = useSelector(state => state.activities)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
        setForm({
            ...form,
            name: toUpdate.name || '',
            difficulty: toUpdate.difficulty || '',
            duration: toUpdate.duration || '',
            season: toUpdate.season || '',
            countries: toUpdate.countries || []
        })
    }, [dispatch, openModal])

    const initalState = {
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    };

    const [form, setForm] = useState(initalState);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let key in form) {
            if (form[key] === '') {
                return setError(`${key.toUpperCase()} can't be empty`)
            }
            if (!form.countries.length) {
                return setError(`You need to provide at least one country`)
            }
            if (!/[0-9]/.test(form.duration) || form.duration < 1) {
                return setError(`Type a valid duration`)
            }

            if (/[\s]/.test(form.duration)) {
                return setError(`Type a valid duration`)
            }

            if (form.duration > 5) {
                return setError('The duration of the activity is too long')
            }
            if (!/^[a-zA-Z\s]*$/.test(form.name)) {
                return setError('Name can´t contain simbols or numbers')
            }
            setError('');
        }

        const existActivity = activities.map(activity => activity.name.toLowerCase()).includes(form.name.toLowerCase())

        if (existActivity) {
            return setError('This activity already exist')
        }

        dispatch(newActivity(form))

        setForm(initalState)
        setOpenModal(false)
    };

    const handleOptions = (e) => {
        setForm({
            ...form,
            countries: [...new Set([...form.countries, e.target.value])]
        })
    }

    const removeOption = (e) => {
        setForm({
            ...form,
            countries: form.countries.filter(country => country !== e.target.innerText)
        })
    }

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleClose = (e) => {
        setOpenModal(false)
        setForm(initalState)
        dispatch(activityToUpdate({}))
    }

    const handleUpdate = () => {
        dispatch(startUpdateActivity(toUpdate.id, form))
        setOpenModal(false)
        dispatch(activityToUpdate({}))
    }

    return (
        <>
            {
                openModal && (
                    <div className='overlay'>
                        <div className="form-container">

                            <form className="form" onSubmit={handleSubmit}>
                                <button className='close' onClick={handleClose}>X</button>
                                <h2>{Object.keys(toUpdate).length ? 'Update Activity' : 'Create a new activity'}</h2>
                                <label htmlFor="name">Name</label>
                                <input
                                    className='form-input'
                                    type="text"
                                    placeholder='Name of activity'
                                    autoComplete='off'
                                    name="name"
                                    value={form.name}
                                    onChange={handleInput}
                                />

                                <label htmlFor="duration">Duration</label>
                                <input
                                    className='form-input'
                                    type="text"
                                    placeholder='Duration in hours'
                                    autoComplete='off'
                                    name="duration"
                                    value={form.duration}
                                    onChange={handleInput}
                                />

                                <fieldset className="difficult">
                                    <legend>Difficult</legend>
                                    {
                                        difficults.map(difficult => (
                                            <label key={difficult}>
                                                <input
                                                    type="radio"
                                                    value={difficult}
                                                    name="difficulty"
                                                    checked={form.difficulty === difficult}
                                                    onChange={handleInput}
                                                />
                                                {difficult}
                                            </label>
                                        ))
                                    }
                                </fieldset>

                                <fieldset className="season">
                                    <legend>Season</legend>
                                    {
                                        seasons.map(season => (
                                            <label key={season}>
                                                <input
                                                    type="radio"
                                                    value={season}
                                                    name="season"
                                                    checked={form.season === season}
                                                    onChange={handleInput}
                                                />
                                                {season}
                                            </label>
                                        ))
                                    }
                                </fieldset>

                                <fieldset className="options">
                                    <legend>Countries</legend>
                                    <select
                                        defaultValue='default'
                                        onChange={handleOptions}
                                    >
                                        <option value='default' disabled>Choose a country</option>

                                        {
                                            countries.map(({ name }) => (
                                                <option key={name} value={name}>{name}</option>
                                            ))
                                        }
                                    </select>
                                    <div className='form-countries'>
                                        {
                                            form.countries.length > 0 && (
                                                form.countries.map(country => (
                                                    <button
                                                        key={country}
                                                        onClick={removeOption}
                                                    >
                                                        {country}
                                                    </button>
                                                ))
                                            )
                                        }
                                    </div>
                                </fieldset>

                                {error && (
                                    <div className="error">
                                        <p>{`${error}!!!`}</p>
                                    </div>
                                )}

                                {
                                    Object.keys(toUpdate).length
                                        ? <button className='form-btn' onClick={handleUpdate}>
                                            Update Activity
                                        </button>

                                        : <button className='form-btn' type='submit'>
                                            Create Activity
                                        </button>
                                }
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}
