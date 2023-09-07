import React from 'react';
// @ts-ignore
import Logo from "Styles/images/logo.svg";
// @ts-ignore
import Frame from "Styles/images/Frame 60.svg";
import {ArrowRight} from "iconsax-react";
import BackToTop from "Components/backToTop";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__header row gy-4  ">
                    <div className="col-md-5">
                        <img src={Logo} alt="logo"/>
                    </div>
                    <div className="col-md-7">
                        <h5>CALM WALK PTY LTD is a supplier for different ranges of flooring such as
                            hybrid and engineered flooring in different colours and different designs.</h5>
                    </div>
                </div>
                <div className="footer__body row flex-wrap-reverse gy-5 ">
                    <div className="col-lg-5 col-md-6">
                        <h5>KNOW IT ALL FIRST!</h5>
                        <div className="position-relative email-contact">
                            <input type="text" placeholder='Enter your email'/>
                            <ArrowRight size={24} className="input-icon" color={'#D2D5DA'}/>
                        </div>
                        <BackToTop/>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 flex-grow-1">
                        <h5>CATEGORIES</h5>
                        <ul>
                            <li><a role={"button"}>Rubber Underlay</a></li>
                            <li><a role={"button"}>Engineered Timber</a></li>
                            <li><a role={"button"}>Splendid Hybrid</a></li>
                            <li><a role={"button"}>Luvanto Herringbone Hybrid</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 flex-grow-1">
                        <h5>SOCIAL NETWORKS</h5>
                        <ul>
                            <li><a role={"button"}>Instagram</a></li>
                            <li><a role={"button"}>Facebook</a></li>
                            <li><a role={"button"}>Twitter</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-1 col-md-6 col-sm-12 flex-grow-1">
                        <h5>OFFICE</h5>
                        <ul>
                            <li>2/11-19 West Circuit,
                                Sunshine West VIC 3020</li>
                            <li>Call Us: 1300 400 440</li>
                            <li>Email Us:
                                info@calmwalk.com.au</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="footer__copyright">
                <div className="container row   h-100 align-items-center">
                    <div className="col-lg-6 col-md-12"><h6>2023 Powered By <span>Redment</span></h6></div>
                    <div className="col-lg-6 col-md-12 social"><img src={Frame} alt="social"/></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;