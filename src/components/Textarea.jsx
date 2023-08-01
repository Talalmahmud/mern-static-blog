import React from "react";

const Textarea = ({ title, inputPlaceholder }) => {
    return (
        <>
            <label>{title}</label>
            <textarea
                placeholder={inputPlaceholder}
                rows={4}
                className=" rounded-md outline-none"
            />
        </>
    );
};

export default Textarea;
