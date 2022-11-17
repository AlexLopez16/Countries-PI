import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCountryById } from './../../actions/countries';

import '../../styles/components/countryCard.css'

export const CountryCard = ({ name, flag, continent, capital, subregion, area, population, id }) => {

    const [active, setActive] = useState(false)
    const dispatch = useDispatch()

    const handleClick = () => {
        setActive(!active)
    }

    const handleDispatch = () => {
        dispatch(getCountryById(id))
    }

    return (
        <div className={active ? 'card show' : 'card'} onClick={handleClick}>
            <div className='header'>
                <img
                    id={id}
                    src={flag}
                    className="img img-responsive"
                    alt="country-img"
                />
                <div className="country-name">
                    {name}
                </div>
                <div className="country-continent">
                    {continent}
                </div>
            </div>

            <div className='content'>
                <div className='tags'>
                    <p>ID:</p>
                    <p>Capital:</p>
                    <p>Subregion:</p>
                    <p>Area:</p>
                    <p>Population:</p>
                </div>
                <div className='data'>
                    <p>{id}</p>
                    <p>{capital}</p>
                    <p>{subregion}</p>
                    <p>{area} km²</p>
                    <p>{population}</p>
                </div>

            </div>

            <div className='footer'>
                <hr />
                <NavLink to={`home/${id}`} style={{ textDecoration: 'none' }}>
                    <div onClick={handleDispatch} className='btn'>Activities</div>
                </NavLink>
            </div>

        </div>
    );
};


