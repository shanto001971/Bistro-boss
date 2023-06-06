import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from 'sweetalert2'
import './Style.css'


const CheckOutForm = ({ cart, price }) => {
    // console.log(price)
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardErr, setCardErr] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardErr(error.message)
        } else {
            setCardErr('')
            console.log(card)
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                quantity: cart.length,
                Status: 'service pending',
                cartItems: cart.map(item => item._id),
                menuItem: cart.map(item => item.menuItemId),
                itemNames: cart.map(item => item.name)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire(
                            'Good job!',
                            'You clicked the button!',
                            'success'
                        )
                    }
                })
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
                <button className="btn btn-secondary w-28 mt-5 text-center" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <div className="text-center">
                {
                    cardErr && <p className="text-red-500">{cardErr}</p>
                }
                {
                    transactionId && <p className="text-green-500">transaction Complete with transactionId {transactionId}</p>
                }


            </div>
        </>
    );
};

export default CheckOutForm;