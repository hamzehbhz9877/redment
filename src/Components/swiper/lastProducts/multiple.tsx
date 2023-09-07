import React, {useEffect, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
// @ts-ignore
import {SwiperOptions} from "swiper/types";
import {Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs} from "swiper/modules";
// @ts-ignore
import imgType1 from "Styles/images/Rectangle 4.svg"
// @ts-ignore
import imgType2 from "Styles/images/Rectangle 29.svg"

// @ts-ignore
import img2 from "Styles/images/Rectangle 32 (1).svg"
// @ts-ignore
import img3 from "Styles/images/Rectangle 44.svg"

//@ts-ignore
import Play from "Styles/images/Polygon 1.svg"


// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

import "Styles/css/pages/main/lastProducts.css"
import LastProduct from "Components/lastProducts";
import CustomScrollbar from "Components/swiper/lastProducts/scrollbar";


const Slider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(undefined);
    const [heroSwiper, setSwiperRef] = useState(null);


    const [isPlay,setIsPlay]=useState(false)


    const [current, setCurrent] = useState(0)
    const [total, setTotal] = useState(0)

    const play = () => {
        // @ts-ignore
        heroSwiper?.autoplay.start();
        setIsPlay(!isPlay)
    };
    const pause = () => {
        // @ts-ignore
        heroSwiper?.autoplay.stop();
        setIsPlay(!isPlay)
    };
    useEffect(() => {
        // @ts-ignore
        if (thumbsSwiper && !thumbsSwiper?.destroyed) {
            // @ts-ignore
            heroSwiper?.autoplay.stop();
        }
    }, [thumbsSwiper])

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}

                // @ts-ignore
                scrollbar={{
                    hide: false,
                    el: '.swiper-scrollbar'
                }}

                //@ts-ignore
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null}}
                modules={[EffectFade, Autoplay, Navigation, Pagination, Scrollbar, Thumbs]}
                updateOnWindowResize
                pagination={{
                    clickable: true,
                    type: 'custom',
                    renderCustom: function (swiper: any, current: number, total: number) {
                        setCurrent(current)
                        setTotal(total)
                        return ''
                    }
                }}
                autoplay={
                    {
                        disableOnInteraction: false,
                        delay: 3000
                    }
                }
                effect={'fade'}
                className="main-swiper"
            >
                <SwiperSlide><LastProduct image={img2} categoryName={'Latest Products'}
                                          themeName={'Spotted Gum'}/></SwiperSlide>
                <SwiperSlide><LastProduct image={img3} categoryName={'Latest Products 2'}
                                          themeName={'Spotted Gum 2'}/></SwiperSlide>
                <SwiperSlide><LastProduct image={img3} categoryName={'Latest Products 3'}
                                          themeName={'Spotted Gum 3'}/></SwiperSlide>
            </Swiper>
            <div className="theme">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    //@ts-ignore
                    effect={'fade'}
                    //@ts-ignore
                    allowTouchMove={false}
                    watchSlidesProgress={true}
                    modules={[EffectFade]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={imgType1}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgType2}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgType2}/>
                    </SwiperSlide>
                </Swiper>
                <CustomScrollbar isPlay={isPlay} pause={pause} total={total} current={current} play={play}/>
            </div>
        </>
    );
};

export default Slider;
