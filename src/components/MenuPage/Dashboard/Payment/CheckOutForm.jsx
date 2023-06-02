import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useState } from "react";

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardErr, setCardErr] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
           setCardErr(error.message)
        } else {
            setCardErr('')
            console.log(paymentMethod)
        }

    }

    return (
       <>
        <form className="lg:p-20 w-2/3 mx-auto" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-secondary w-28 mt-5 text-center" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
        <div className="text-center">
        {
            cardErr&& <p className="text-red-500">{cardErr}</p>
        }
        </div>
       </>
    );
};

export default CheckOutForm;