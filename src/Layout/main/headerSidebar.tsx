import React from 'react';

// @ts-ignore
import Logo from "Styles/images/logo.svg"
import {ArrowDown2, ArrowRight2, CloseCircle, Profile} from "iconsax-react";
import {menu} from "Layout/header";

type Props = {
    isOpen: boolean
    closeSidebar: () => void
}
const HeaderSidebar = ({isOpen, closeSidebar}: Props) => {
    return (
        <div className={`header-sidebar ${isOpen ? 'header-sidebar--open' : ''}`}>
            <div className="header-sidebar__header d-flex justify-content-between align-items-center">
                <img src={Logo} alt=""/>

                <CloseCircle color={"#25314C"} size={24} onClick={closeSidebar}/>
            </div>

            <div className="header-sidebar__list d-flex flex-column justify-content-between">
                <ul className="d-flex flex-column">
                    {menu.map((item, index) =>
                        <li key={index}><a role="button"><b>{item.name}</b></a>
                            {item.hasDropdown ? <ArrowDown2
                                size="20"
                                color="#292D32"
                            /> : ''}
                        </li>)}
                </ul>

                <div className="header-sidebar__login-register" role="button">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Profile size={24} color={'#374151'}/>
                            <span><b>Login/Register</b></span>
                        </div>
                        <ArrowRight2
                            size="20"
                            color="#292D32"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderSidebar;