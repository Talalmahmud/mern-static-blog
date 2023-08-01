import React, { memo } from "react";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

const Contact = () => {
    return (
        <div className=" min-h-screen w-full flex flex-col  justify-center items-center">
            <div className=" bg-orange-300 rounded-md shadow-lg px-20 py-10 ">
                <h2 className=" text-red-600 text-3xl mb-10 font-bold">
                    Contact us
                </h2>
                <form className=" flex flex-col gap-2">
                    <Input
                        inputType={"text"}
                        inputPlaceholder={"Name"}
                        title={"Name"}
                    />
                    <Input
                        inputType={"text"}
                        inputPlaceholder={"Email"}
                        title={"Email"}
                    />
                    <Textarea
                        inputPlaceholder={"Enter your valuable comments"}
                        title={"Comments"}
                    />
                    <button className=" bg-orange-400 py-2 mt-3 rounded-md shadow-lg text-white font-semibold">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default memo(Contact);
