import React from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";

const SideMenubar = ({ sideBarToggle }) => {
    return (
        <div className=" flex justify-center gap-10 flex-col items-center md:hidden absolute z-40 bg-orange-400 left-0 top-0 w-72 min-h-screen transition-all delay-200 ease-in-out ">
            <div className="absolute top-6 right-4">
                <button
                    className=" flex justify-center items-center text-[20px] text-white rounded-[100%] h-[30px] w-[30px]  shadow-lg p-1 hover:shadow-md"
                    onClick={sideBarToggle}
                >
                    <p className=" text-sm">X</p>
                </button>
            </div>

            <div onClick={sideBarToggle}>
                <Logo />
            </div>

            <div onClick={sideBarToggle}>
                <NavMenu />
            </div>
        </div>
    );
};

export default SideMenubar;
