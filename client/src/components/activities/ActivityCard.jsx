import { useDispatch } from 'react-redux';
import { activityToUpdate, startDeleting } from '../../actions/activities';

import "../../styles/components/activityCard.css";
import { useHistory } from 'react-router-dom';

export const ActivityCard = ({ id, name, difficulty, duration, season, countries, openModal, setOpenModal }) => {
    const dispatch = useDispatch()
    const { pathname } = useHistory().location

    const handleDelete = () => {
        dispatch(startDeleting(id))
    }

    const handleUpdate = () => {
        setOpenModal(true)
        dispatch(activityToUpdate({
            id,
            name,
            difficulty: difficulty.toString(),
            duration,
            season,
            countries: countries.map(country => country.name)
        }))
    }

    return (
        <div className='card-activity' id={id}>
            <div className='header-activity'>
                <div className="activity-name">
                    {name}
                </div>
            </div>

            <div className='content-activities'>
                <div className='tags-act'>
                    <p>DIFFICULTY:</p>
                    <p>DURATION:</p>
                    <p>SEASON:</p>
                </div>
                <div className='data-acts'>
                    <p>{difficulty}</p>
                    <p>{duration} Hours</p>
                    <p>{season}</p>
                </div>

            </div>

            {
                (pathname === '/activities' &&
                    <div className='footer-activity'>
                        <button className='btn-delete' onClick={handleDelete}>DELETE</button>
                        <button className='btn-edit' onClick={handleUpdate}>EDIT</button>
                    </div>
                )
            }
        </div>
    )
}
