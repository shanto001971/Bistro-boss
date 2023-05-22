import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import NavBar from '../components/Shared/navBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Main;