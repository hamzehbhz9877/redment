import React from 'react';
import ExploreMore from "Components/exploreMore";


type Props={
    image:string
    title:string
    date:string
}
const Blog = ({image,title,date}:Props) => {
    return (
        <div className="blog">
            <div className="blog__header">
                <div className="blog__header-image">
                    <img src={image} alt=""/>
                </div>
            </div>
           <div className="blog__body">
               <span className="blog__body-date">{date}</span>
               <h5 className="blog__body-title">{title}</h5>
               <ExploreMore title={'Read more'} color={'#6F1AB6'}/>
           </div>

        </div>
    );
};

export default Blog;