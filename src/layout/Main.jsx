import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/navBar/NavBar';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('singup');
    
    return (
        <div>
            {noHeaderFooter || <NavBar />}
            <Outlet />
            {noHeaderFooter || <Footer />}

        </div>
    );
};

export default Main;