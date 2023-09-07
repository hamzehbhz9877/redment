import React, {RefObject} from "react";
import {ArrowLeft, ArrowRight} from "iconsax-react";


type CustomButtons = {
    prevRef: RefObject<any>;
    nextRef: RefObject<any>;
};

const CustomButtons = ({nextRef, prevRef}: CustomButtons) => {
    return (
        <div className="d-flex align-items-center justify-content-between slider__buttons">
            <div className="d-flex">
                <button className="swiper-button left bg-transparent " ref={prevRef}>
                    <div className="position-relative me-4">
                        <ArrowLeft className="arrow-left" size={24}/>
                    </div>
                </button>
                <button className="swiper-button right bg-transparent" ref={nextRef }>
                    <div className="position-relative">
                        <ArrowRight className="arrow-right" size={24}/>
                    </div>

                </button>

            </div>

        </div>
    );
};

export default CustomButtons;
