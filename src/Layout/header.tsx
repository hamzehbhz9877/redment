import React, {useState} from 'react';
// @ts-ignore
import Logo from "Styles/images/logo.svg"
import {ArrowDown2, HambergerMenu, Profile} from "iconsax-react";
import HeaderSidebar from "Layout/main/headerSidebar";
import PortalWrapper from "Components/portal";

export const menu = [
    {
        name: 'Home'
    },
    {
        name: 'Our Products',
        hasDropdown: true
    },
    {
        name: 'Brochures & Technicals'
    },
    {
        name: 'Inspiration'
    },
    {
        name: 'About Us'
    },
]
const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const handleOpenSidebar = () => setIsOpen(true)
    const handleCloseSidebar = () => setIsOpen(false)
    return (
        <div className="header d-flex align-items-center justify-content-between">

            <div className="header-left">
                <img src={Logo} alt="logo"/>
            </div>

            <div className="header-center desktop-lg">
                <ul className="d-flex">
                    {menu.map((item, index) =>
                        <li key={index}><a role={"button"}>{item.name}</a>
                            {item.hasDropdown ? <ArrowDown2
                                size="20"
                                color="#292D32"
                            /> : ''}
                        </li>)}
                </ul>
            </div>


            <div className="header-right d-flex align-items-center">
                <button className="btn btn-c2">Contact</button>

                <HambergerMenu size={24} className="mobile" color={'black'} onClick={handleOpenSidebar}/>

                <div className="header-right__profile d-flex desktop">
                    <a>
                        <Profile
                            size="24"
                            color="#374151"
                        />
                        <ArrowDown2
                            size="20"
                            color="#374151"
                        />
                    </a>
                </div>
            </div>
            <PortalWrapper component={document.getElementById("sidebar") as HTMLDivElement}>
                <HeaderSidebar isOpen={isOpen} closeSidebar={handleCloseSidebar}/>
            </PortalWrapper>

        </div>
    );
};

export default Header;