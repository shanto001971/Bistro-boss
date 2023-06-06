import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useCart } from "../../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2));
    
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}/>
            </Elements>
        </div>
    );
};

export default Payment;