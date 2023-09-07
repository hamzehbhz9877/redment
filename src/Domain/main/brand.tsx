import React, {useEffect} from 'react';

// @ts-ignore
import Img from "Styles/images/brand.svg"
import 'Styles/css/pages/main/brand.css'
import ExploreMore from "Components/exploreMore";

const Brand = () => {

    return (
        <div className="brand row flex-wrap-reverse g-0 ">
                <div className="col-md-6  img ">
                    <img src={Img} alt=""/>
                </div>
                <div className="col-md-6  content">
                    <h6>TOP NOTCH AUSTRALIA’S FLOORING BRAND</h6>
                    <h1>Enhance your interior Just with <span className="main-color">CalmWalk</span></h1>
                    <p>
                        We are a distinguished provider in the industry of high-quality exceptional tiles. Knowing the
                        expectation of the customers and understanding their personalities, we have succeeded in
                        providing striking varieties of tiles that look astonishing in every way.
                    </p>
                    <ExploreMore title={'Learn more'} color={'#6F1AB6'}/>
                </div>
        </div>
    );
};

export default Brand;