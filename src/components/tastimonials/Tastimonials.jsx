import SectionTitle from "../sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from 'react-icons/fa';

import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";


const Tastimonials = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    console.log(review)
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'What Our Client say'}
                heading={'Tastimonials'}
            ></SectionTitle>
            <div className="">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {review.map(reviewItem => <SwiperSlide
                        key={reviewItem._id}
                    >
                        <div className="mx-24 my-16 text-center">
                            <Rating className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={reviewItem?.rating}
                                readOnly
                            />
                            <FaQuoteLeft className="mx-auto w-20 h-20 my-5" />
                            <p className="my-5">{reviewItem.details}</p>
                            <h3 className="text-2xl text-orange-400">{reviewItem?.name}</h3>
                        </div>
                    </SwiperSlide>)}

                </Swiper>
            </div>

        </section>
    );
};

export default Tastimonials;