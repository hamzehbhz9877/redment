import React from 'react';
import Slider from "Components/swiper/lastProducts/multiple";

// @ts-ignore
import Img from "Styles/images/Group 1.svg"

const LastProducts = () => {
    return (
        <div className="position-relative header-swiper">
            <Slider/>
            <div className="special-products">
                <img src={Img} alt=""/>
            </div>
        </div>
    );
};

export default LastProducts;