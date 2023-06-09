import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome,FaUtensils, FaBook, FaUsers, FaListUl } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { useCart } from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin]=useAdmin();
    return (
        <div className="">
            <Helmet>
                <title>BristoBoss | Dashboard</title>
            </Helmet>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">

                        {
                            isAdmin ? <>
                                 <li><NavLink to='/dashboard/home'><FaHome/>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils/> Add an Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><FaListUl/> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaBook/> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers />All Users</NavLink></li>
                               
                            </> : <>
                                <li><NavLink to='/dashboard/home'><FaHome/>Home</NavLink></li>
                                <li><NavLink to='/dashboard/payment'><FaWallet /> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'>
                                    <FaShoppingCart />
                                    My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                                
                            </>
                        }



                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome />Home</NavLink></li>
                        <li><NavLink to="/menu" className="mr-5">Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad" className="mr-5">Order</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;