import { useEffect, useState } from 'react'
import '../../styles/components/selector.css'
import { useDispatch } from 'react-redux';
import { setActiveFilterBy } from '../../actions/countries';

export const Selector = () => {
    const [selected, setSelected] = useState("Order by");
    const options = ['Name A-Z', 'Name Z-A', 'Population Ascending', 'Population Descendant']

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch()

    const handleClick = (e) => {
        setIsOpen(!isOpen);
        setSelected(e.target.textContent)
        if (e.target.className === 'dropdown-item') {
            dispatch(setActiveFilterBy(e.target.textContent))
        }
    }

    useEffect(() => {
        const closeDropDown = (e) => {
            if (e.path[0].className !== 'dropdown-btn') {
                setIsOpen(false)
            }
        }
        document.body.addEventListener('click', closeDropDown)
        return () => document.body.removeEventListener('click', closeDropDown)
    }, [])

    return (
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={handleClick}>{selected}</div>
            {isOpen && (
                <div className='dropdown-content'>
                    {
                        options.map((option, i) => (
                            <div
                                key={i}
                                className='dropdown-item'
                                onClick={handleClick}
                            >
                                {option}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    )
}
