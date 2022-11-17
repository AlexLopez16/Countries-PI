import { useState } from 'react';
import '../../styles/ui/navbar.css'
import { useDispatch } from 'react-redux';
import { getCountryByName, setCountrySearch } from '../../actions/countries';
import { Link, NavLink, useHistory } from 'react-router-dom';

export const Navbar = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const history = useHistory()

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = (e) => {

        if (history.location.pathname !== '/home') {
            history.push('/home', { from: 'activities' })
            dispatch(setCountrySearch(value))
        }

        e.preventDefault();
        dispatch(getCountryByName(value))
        setValue('')
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleClick(e)
            e.target.blur()
        }
    }

    return (
        <div className='container'>
            <Link to='/home' style={{ textDecoration: 'none' }} >
                <h2>
                    Hello <span>Countries</span>
                </h2>
            </Link>

            <div className='links'>
                <NavLink
                    exact
                    activeClassName='active'
                    to='/home'
                    style={{ textDecoration: 'none' }}
                >
                    <span>Home</span>
                </NavLink>
                <NavLink
                    exact
                    activeClassName='active'
                    to='/activities'
                    style={{ textDecoration: 'none' }}
                >
                    <span>Activities</span>
                </NavLink>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={onChange}
                    value={value}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={handleClick}>Search</button>
            </div>
        </div >
    );
};