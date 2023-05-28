import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from "../../../hooks/useCart";


const NavBar = () => {
    const { user, LogOutUser } = useContext(AuthContext);

    const [cart] = useCart();

    const handelLogOut = () => {
        LogOutUser()
            .then(() => { })
            .catch(() => { })
    }

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to="/" className="mr-5"><li>Home</li></NavLink>
                        <NavLink to="/menu" className="mr-5"><li>Our Menu</li></NavLink>
                        <NavLink to="/order/salad" className="mr-5"><li>Order</li></NavLink>
                        {
                            user ? <button onClick={handelLogOut} className="btn btn-active btn-ghost mr-5"><NavLink ><li>LogOut</li></NavLink></button>
                                : <NavLink to="/login" className="btn btn-active btn-ghost mr-5"><li>LogIn</li></NavLink>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/" className="mr-5"><li>Home</li></NavLink>
                    <NavLink to="/menu" className="mr-5"><li>Our Menu</li></NavLink>
                    <NavLink to="/order/salad" className="mr-5"><li>Order</li></NavLink>
                    <NavLink to="/secrets" className="mr-5"><li>Secrets</li></NavLink>
                    <NavLink to="/dashboard/mycart" className="mr-5">
                        <button className="btn gap-2 badge badge-secondary btn-xs">
                            <FaShoppingCart />
                            <li className="">+{cart?.length || 0}</li>
                        </button>
                    </NavLink>
                    {
                        user ? <button onClick={handelLogOut} className=" mr-5"><NavLink><li>LogOut</li></NavLink></button>
                            : <NavLink to="/login" className=" mr-5"><li>LogIn</li></NavLink>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;