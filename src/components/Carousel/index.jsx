import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.css";

export default function Carousel(props) {
    const {props:imgs}=props
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
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
                            <img src={img.url} style={{width:'70%'}} alt=""/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}
