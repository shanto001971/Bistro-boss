import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);

const Payment = () => {
    return (
        <div>
            <h1>paymennt is comming soon</h1>
            <Elements stripe={stripePromise}>
               <CheckOutForm/>
            </Elements>
        </div>
    );
};

export default Payment;