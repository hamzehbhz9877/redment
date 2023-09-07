import React from 'react';
import Header from "Layout/header";
import Footer from "Layout/footer";
import HeaderInfo from "Domain/main/headerInfo";
import LastProducts from "Domain/main/lastProducts";
import Brand from "Domain/main/brand";
import Products from "Domain/main/products";
import Pet from "Domain/main/pet";
import Blogs from "Domain/main/blogs";


function App() {
    return (
        <div className="App">
            <header className='position-relative vector'>
                    <div className="container position-relative z-1">
                        <Header/>
                        <HeaderInfo/>
                    </div>
                    <LastProducts/>
                <div className="extra-margin"/>
            </header>
            <main>
                <Brand/>
                <Products/>
                <Pet/>
                <Blogs/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
