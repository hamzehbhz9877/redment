import React from 'react';
import SingleSlider from "Components/swiper/products";
import ExploreMore from "Components/exploreMore";

const Products = () => {
    return (
        <div className="products container">
            <div className="row gx-0  products__header">
                <div className="col-md-6">
                    <span>OUR RANGE</span>
                    <h2>Explore our products</h2>
                </div>
                <div className="col-md-6">
                    <p>We are a distinguished provider in the industry of high-quality exceptional tiles. Knowing the
                        expectation of the customers and understanding their personalities.</p>
                    <ExploreMore color={"#6F1AB6"} title={"View all products"}/>
                </div>
            </div>
            <SingleSlider/>
        </div>
    );
};

export default Products;