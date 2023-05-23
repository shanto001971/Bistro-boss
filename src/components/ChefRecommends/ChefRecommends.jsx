import SectionTitle from "../sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ChefCard from "./ChefCard";
import img1 from "../../assets/home/slide1.jpg"
import img2 from "../../assets/home/slide2.jpg"
import img3 from "../../assets/home/slide3.jpg"
import img4 from "../../assets/home/slide4.jpg"
import img5 from "../../assets/home/slide5.jpg"


const ChefRecommends = () => {
    return (
        <div className="my-10">
            <div className="w-full text-center bg-black p-16">
                <h1 className="text-white text-3xl font-serif">Call Us: +88 01788-88888</h1>
            </div>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            >
            </SectionTitle>


            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                
                <SwiperSlide><ChefCard img={img1}/></SwiperSlide>
                <SwiperSlide><ChefCard img={img2}/></SwiperSlide>
                <SwiperSlide><ChefCard img={img3}/></SwiperSlide>
                <SwiperSlide><ChefCard img={img4}/></SwiperSlide>
                <SwiperSlide><ChefCard img={img5}/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ChefRecommends;