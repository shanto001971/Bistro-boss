import { Helmet } from "react-helmet-async";
import { useCart } from "../../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
    const [cart, refetch] = useCart();
    // console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    // console.log(total)


    const handelDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="mt-10">
            <Helmet>
                <title>BristoBoss | MyCart</title>
            </Helmet>
            <div className="flex justify-around mb-4">
                <h1>Total Items {cart.length}</h1>
                <h1>Total Price: ${total}</h1>
                <Link to='/dashboard/payment'><button className="btn btn-primary btn-xs">Pay</button></Link>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>

                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>

                                </td>
                                <td>

                                    {
                                        item.name
                                    }
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button onClick={() => handelDelete(item._id)} className="btn btn-ghost btn-xs"><FaTrashAlt /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;