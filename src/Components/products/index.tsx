import React from 'react';
import ExploreMore from "Components/exploreMore";

type Props={
  image:string
    tag?:string
    title:string
}

const Product = ({title,image,tag}:Props) => {
    return (
        <div className="product">
            <img src={image} />
            <div className="content">
                {tag &&<span className="product__tag">{tag}</span>}
                <h1>{title}</h1>
                <ExploreMore  title={'More Details'} disableUnderline/>
            </div>

        </div>
    );
};

export default Product;