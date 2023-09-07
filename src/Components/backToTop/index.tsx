import React from 'react';
import {ArrowUp} from "iconsax-react";

const BackToTop = () => {
    const handleBackToTop=()=>{
        window.scrollTo(0,0)
    }
    return (
        <div className="back-to-top d-flex align-items-center justify-content-center" onClick={handleBackToTop}>
            <ArrowUp size={24} color={"white"}/>
        </div>
    );
};

export default BackToTop;