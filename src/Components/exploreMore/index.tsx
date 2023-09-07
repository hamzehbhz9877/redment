import React from 'react';
import {ArrowRight} from "iconsax-react";
// @ts-ignore


type Props = {
    title?: string
    color?: string
    disableUnderline?:boolean
    tag?:'h5'|'h6'
}
const ExploreMore = ({title = 'Explore more', color = '#D2D5DA',disableUnderline=false,tag='h6'}: Props) => {
    const Tag=tag
    return (
        <a className="f-flex align-items-center" role="button">
            <div className={`explore-more align-items-center ${disableUnderline?'explore-more--disabled':''}`}>
                        <Tag style={{color}}>{title}</Tag>
                <ArrowRight size={24} color={color}/>
            </div>

        </a>
    );
};

export default ExploreMore;