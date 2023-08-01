import React from "react";

const Input = ({ inputType, title, inputPlaceholder }) => {
    return (
        <>
            <label>{title}</label>
            <input
                type={inputType}
                placeholder={inputPlaceholder}
                className={" shadow-lg  rounded-md outline-none px-4 py-1"}
            />
        </>
    );
};

export default Input;
