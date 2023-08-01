import React, { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import SideMenubar from "./SideMenubar";

const Nabvar = () => {
    const [sideBar, setSideBar] = useState(false);
    const sideBarToggle = () => {
        setSideBar(!sideBar);
    };
    return (
        <div className=" sticky top-0 z-10 bg-orange-400 px-10 py-4 w-full ">
            <div className=" flex justify-between items-center">
                <Logo />
                <div className=" hidden md:block">
                    <NavMenu />
                </div>
                <button
                    onClick={sideBarToggle}
                    className=" block md:hidden text-white"
                >
                    <GiHamburgerMenu size={32} />
                </button>
                {sideBar && <SideMenubar sideBarToggle={sideBarToggle} />}
            </div>
        </div>
    );
};

export default Nabvar;
