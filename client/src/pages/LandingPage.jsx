import { Link } from "react-router-dom";
import "../styles/pages/landingPage.css";

export const LandingPage = () => {
    const stars = [...Array(10)].map((_, index) => index);
    return (
        <div className="clouds">
            {
                stars.map(star => (
                    <div key={star} className='star'></div>
                ))
            }
            <div className="title">
                <span>Countries</span>
                <span>Of</span>
                <span>The</span>
                <span>World</span>
            </div>
            <Link to='/home'>
                <div className="map"></div>
            </Link>

        </div>
    )
}
