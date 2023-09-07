import React from 'react';

import ExploreMore from "Components/exploreMore";

type Props={
    image:string
    categoryName:string
    themeName:string

}
const LastProduct = ({image,categoryName,themeName}:Props) => {
    return (
        <>

            <div className='image' style={{backgroundImage:`url('${image}')`,width:"100%"}}/>
            <div className="info d-flex flex-column flex-md-row justify-content-between justify-content-md-start">
                <div className="d-flex align-items-center">
                    <div className="info__category">
                        <h6>Category</h6>
                        <h4><b>{categoryName}</b></h4>
                    </div>
                    <div className="divider"/>
                    <div className="info__theme">
                        <h6>Theme</h6>
                        <h4><b>{themeName}</b></h4>
                    </div>
                </div>
                <div className="align-self-start align-self-md-end position-relative z-3">
                    <ExploreMore tag={'h5'} color={'#E5E7EB'}/>
                </div>
            </div>
        </>

    );
};

export default LastProduct;