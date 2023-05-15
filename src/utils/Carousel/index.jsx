import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

export default function Carousel() {
    const imgs = [
        require("../img/2-1.jpg"),
        require("../img/2-2.jpg"),
        require("../img/2-3.jpg"),
        require("../img/2-4.jpg"),
        require("../img/2-5.jpg"),
    ]
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //     delay: 2000,
            //     disableOnInteraction: false,
            // }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                imgs.map((img, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={img} alt=""/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}
