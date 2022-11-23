import { Link } from "react-router-dom";
import "../styles/pages/404Page.css";

export const PageNotFound = () => {
    return (
        <div id='oopss'>
            <div id='error-text'>
                <span>404</span>
                <p>PAGE NOT FOUND</p>
                <Link to='/home'>
                <button className="back">
                    Back To Home
                </button>
                </Link>
            </div>
        </div>
    )
}
