import { useSelector } from 'react-redux';
import { ActivityCard } from './ActivityCard';


export const ActivitiesList = ({ openModal, setOpenModal }) => {

    const { activities } = useSelector(state => state.activities)
    const { countryById } = useSelector(state => state.countries)

    const array = countryById.length ? countryById : activities

    return (
        <div className='container-group' style={{height: '100vh'}}>
            {
                array.map(({ id, name, difficulty, duration, season, Countries }) => (
                    <div className='element' key={name}>
                        <ActivityCard
                            id={id}
                            name={name}
                            difficulty={difficulty}
                            duration={duration}
                            season={season}
                            countries={Countries}

                            openModal={openModal}
                            setOpenModal={setOpenModal}
                        />
                    </div>
                ))
            }
        </div>
    )
}
