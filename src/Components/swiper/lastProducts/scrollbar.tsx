import React from 'react';

// @ts-ignore
import img from "Styles/images/Rectangle 4.svg";
import {Pause, Play} from "iconsax-react";


type Props = {
    play: () => void
    current: number
    total: number
    isPlay:boolean
    pause:()=>void
}
const CustomScrollbar = ({current, play, total,isPlay,pause}: Props) => {
    return (
        <div className="play-scrollbar">

            {isPlay ?
                <a onClick={pause} className="play-button"><Pause variant="Bold" color="#ffffff"
                                                                 size={24}/></a> :
                <a onClick={play} className="play-button"><Play variant="Bold" color="#ffffff"
                                                                size={24}/></a>}

            <div className="scrollbar d-flex align-items-center">
                <span className="current">0{current}</span>
                <div className='swiper-scrollbar'/>
                <span className="total">0{total}</span>
            </div>
        </div>
    );
}
;

export default CustomScrollbar;