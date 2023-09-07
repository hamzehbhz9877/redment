import React from 'react';

// @ts-ignore
import Img from "Styles/images/Rectangle 18.svg"

// @ts-ignore
import Watermark from "Styles/images/CALMWALK.svg"

import "Styles/css/pages/main/pet.css"
import ExploreMore from "Components/exploreMore";
const Pet = () => {
    return (
        <div className="pet ">
            <div className="container  row flex-wrap-reverse g-0 px-0">
                <div className="col-md-6 px-0 img">
                    <img src={Img} alt=""/>
                </div>
                <div className="col-md-6  content">
                    <h1><span className="main-color">Pet-friendly</span> Along The Whole
                        Value Chain</h1>
                    <p>
                        Our products are sourced with complete consideration for the environment and with healthy living in
                        mind. We choose manufacturing partners that match these non-negotiable parameters. Preference Floors
                        products are manufactured using advanced production technology utiltising sustainable non-toxic
                        materials including raw materials & final coatings, this delivers an ethical product framework from
                        beginning to end.
                    </p>
                    <ExploreMore title={'How we do that'} color={'#6F1AB6'}/>
                </div>
            </div>
            <div className="watermark">
                <img src={Watermark} alt=""/>
            </div>
        </div>
    );
};

export default Pet;