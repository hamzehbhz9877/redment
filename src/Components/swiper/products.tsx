import React, {useRef, useState} from "react";
import { Swiper,SwiperSlide } from "swiper/react";
// @ts-ignore
import {SwiperOptions} from "swiper/types";
import { Navigation, Pagination,Scrollbar} from "swiper/modules";

// @ts-ignore
import img1 from "Styles/images/Parquet.svg"
// @ts-ignore
import img2 from "Styles/images/Parquet (1).svg"
// @ts-ignore
import img3 from "Styles/images/Parquet (2).svg"
// @ts-ignore
import img4 from "Styles/images/Parquet (3).svg"

//@ts-ignore
import Arrow from "Styles/images/Arrow 1.svg"

//@ts-ignore
import Group from "Styles/images/Group 47146.svg"


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import "Styles/css/pages/main/products.css"
import Product from "Components/products";
import UseNextPrevSwiper from "Hooks/useNextPrevSwiper/useNextPrevSwiper";
import CustomButtons from "Components/swiper/lastProducts/customNavigationButton";



const SingleSlider = () => {
    const { nextRef, prevRef, setSwiper, afterInit } = UseNextPrevSwiper();

    return (
        <div className="position-relative">
            <Swiper
                // @ts-ignore
                modules={[Navigation, Pagination,Scrollbar]}
                // @ts-ignore
                scrollbar={{
                    hide: false,
                    el: '.swiper-scrollbar-product'
                }}
                onAfterInit={afterInit}
                spaceBetween={18}
                updateOnWindowResize
                navigation={{ prevEl: prevRef?.current, nextEl: nextRef?.current }}
                onSwiper={setSwiper}
                className="swiper-products"
            >
                <SwiperSlide>
                    <Product image={img2} title={"Lavender Grey"} tag={"Popular"}/>
                    <Product image={img1}title={"Hazelnut"} />
                    <Product image={img3} title={"Light Goldenrod"}/>
                    <Product image={img4} title={"Kobicha"} tag="Top Selling"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product image={img2} title={"Lavender Grey"} tag={"Popular"}/>
                    <Product image={img2} title={"Hazelnut"}/>
                    <Product image={img3} title={"Light Goldenrod"}/>
                    <Product image={img4} title={"Kobicha"} tag="Top Selling"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product image={img2} title={"Lavender Grey"} tag={"Popular"}/>
                    <Product image={img2} title={"Hazelnut"}/>
                    <Product image={img3} title={"Light Goldenrod"}/>
                    <Product image={img4} title={"Kobicha"} tag="Top Selling"/>
                </SwiperSlide>
            </Swiper>

            <div className="product-group">
                <img src={Group} alt="exclusive"/>
            </div>

            <div className="scrollbar d-flex align-items-center">
                <div className='swiper-scrollbar  swiper-scrollbar-product flex-grow-1'/>
                <CustomButtons
                    nextRef={nextRef}
                    prevRef={prevRef}
                />
            </div>

        </div>
    );
};

export default SingleSlider;
