import React from 'react';
import Blog from "Components/blog";
// @ts-ignore
import Image from "Styles/images/Rectangle 19.svg"
import "Styles/css/pages/main/blog.css"

const Blogs = () => {
    return (
        <div className="blogs ">
            <div className="container">
                <div className="blogs__header text-center">
                    <h6>KNOW MORE ABOUT FLOORING</h6>
                    <h2>Blog & News</h2>
                    <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                        aliquet odio mattis.</p>
                </div>
                <div className="row g-32 m-0">
                    <div className="col-lg-4 col-md-6 "><Blog date={'July 10, 2023'}
                                                    title={'Why flooring should be the most vital\n' +
                                                    'aspect of a house?'} image={Image}/></div>
                    <div className="col-lg-4 col-md-6 "><Blog date={'July 10, 2023'}
                                                    title={'Why flooring should be the most vital\n' +
                                                    'aspect of a house?'} image={Image}/></div>
                    <div className="col-lg-4 col-md-6 "><Blog date={'July 10, 2023'}
                                                    title={'Why flooring should be the most vital\n' +
                                                    'aspect of a house?'} image={Image}/></div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;