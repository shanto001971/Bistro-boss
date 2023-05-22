import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Slide1 from '../../assets/home/slide1.jpg';
import Slide2 from '../../assets/home/slide2.jpg';
import Slide3 from '../../assets/home/slide3.jpg';
import Slide4 from '../../assets/home/slide4.jpg';
import Slide5 from '../../assets/home/slide5.jpg';
import SectionTitle from "../sectionTitle/SectionTitle";




const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"from 11.00 to 10.00 pm"}
                heading={"Order Online"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="">
                    <img src={Slide1} alt="" className="" />
                    <h1 className="text-4xl font-thin uppercase ml-16 -mt-16 text-white mb-20">SHALAD</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide2} alt="" />
                    <h1 className="text-4xl font-thin uppercase ml-16 -mt-16 text-white mb-20">soups</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide3} alt="" />
                    <h1 className="text-4xl font-thin uppercase ml-16 -mt-16 text-white mb-20">pizzas</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide4} alt="" />
                    <h1 className="text-4xl font-thin uppercase ml-16 -mt-16 text-white mb-20">dsserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide5} alt="" />
                    <h1 className="text-4xl font-thin uppercase ml-16 -mt-16 text-white mb-20">SHALAD</h1>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;