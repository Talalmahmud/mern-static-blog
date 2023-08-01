import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavButton = ({ title, page }) => {
    const { pathname } = useLocation();

    return (
        <>
            <Link
                to={`/${title}`}
                className={
                    pathname.slice(1) === title
                        ? "text-red-700 rounded-md shadow-md px-2 py-1"
                        : "text-white"
                }
            >
                <p className="tracking-tighter text-base font-semibold">
                    {page}
                </p>
            </Link>
        </>
    );
};

export default NavButton;
