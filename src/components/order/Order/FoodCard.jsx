import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

const FoodCard = ({ items }) => {
    const { name, image, price, recipe, _id } = items;
    // console.log(items)
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const handelAddToCart = (item) => {
        console.log(item)
        if (user && user.email) {
            const CartItem = { menuItemId: _id, name, image, email: user.email, price: item.price };

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(CartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        Swal.fire({
                            title: 'Please login to order the food',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login now'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/login', { state: { from: location } })
                            }
                        })
                    }

                })
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Food" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-md'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handelAddToCart(items)} className="btn btn-outline border-orange-400 bg-slate-100 border-0 border-b-4  mt-8">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;