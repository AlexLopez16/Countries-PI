import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualPage } from './../../actions/ui';

import "../../styles/ui/pagination.css";

export const Pagination = () => {

    const dispatch = useDispatch();

    const { countries } = useSelector(state => state.countries)
    const { countriesFilters } = useSelector(state => state.countries)
    const arrayCountries = (countriesFilters.length) ? countriesFilters : countries

    const [currentPage, setCurrentPage] = useState(1)
    const maxPages = Math.ceil((arrayCountries.length - 9) / 10) + 1;
    const nPages = [...Array(maxPages)].map((_, index) => index + 1)

    const handleClick = (number) => {
        setCurrentPage(number)
    }

    const clickPrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const clickNext = () => {
        if (currentPage < maxPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {
        setCurrentPage(1)
    }, [arrayCountries])


    useEffect(() => {
        dispatch(actualPage(currentPage))
    }, [dispatch, currentPage])


    return (
        <div className="btn-container">
            <button onClick={clickPrev}>&lt;</button>
            {
                nPages.map(number => (
                    <button
                        key={number}
                        id={number}
                        className={currentPage === number ? 'active' : 'no'}
                        onClick={() => handleClick(number)}
                    >
                        {number}
                    </button>
                ))
            }
            <button onClick={clickNext}>&gt;</button>
        </div>
    )
}
