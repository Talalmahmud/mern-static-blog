import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <>
            <Link to="/">
                <h2 className=" font-bold text-white text-3xl">Blogs</h2>
            </Link>
        </>
    );
};

export default Logo;
