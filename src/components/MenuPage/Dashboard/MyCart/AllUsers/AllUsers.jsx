import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";



const AllUsers = () => {
    const [axiosSecure]=useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/user')
        return res.data;
    })

    const handelMakeAdmin = (user) => {

        fetch(`http://localhost:5000/user/admin/${user._id}`, {
            method: 'PATCH',
            
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'Made Admin',
                        title: `${user.name} is an admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                console.log(data)})
    }

    const handelDelete = (user) => {
        console.log(user)
    }

    return (
        <div>
            <Helmet>
                <title>BristoBoss | All User</title>
            </Helmet>
            <h1>hello this is All user page :  {users.length}</h1>

            <div className="">
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>3</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handelMakeAdmin(user)} className="btn btn-ghost btn-xs"><FaUserShield /></button>}</td>
                                    <td><button onClick={() => handelDelete(user)} className="btn btn-ghost btn-xs"><FaTrashAlt /></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;