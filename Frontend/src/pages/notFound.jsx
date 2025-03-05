import { useNavigate } from 'react-router-dom';
import '../styles/notFound.css';
import notFoundImage from '../assets/not-found.png';

const notFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <div className="not-found-left">
                <img src={notFoundImage} alt="Not Found" className="not-found-image" />
            </div>

            <div className="not-found-right">
                <h1 className="fade-in">404</h1>
                <h2 className="fade-in">Page Not Found</h2>
                <p className="fade-in">Sorry, the page you are looking for does not exist.</p>
                <button className="bounce" onClick={() => navigate('/')}>Go to Home</button>
            </div>
        </div>
    );
};

export default notFound;