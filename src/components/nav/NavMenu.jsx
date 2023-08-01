import React from "react";
import NavButton from "./NavButton";

const NavMenu = () => {
    return (
        <div className=" flex bg-orange-400 md:bg-none md:flex-row flex-col justify-center items-center gap-6">
            <NavButton title={""} page={"Home"} />
            <NavButton title={"about"} page={"About"} />
            <NavButton title={"contact"} page={"Contact"} />
        </div>
    );
};

export default NavMenu;
