import React from "react";
import BlogList from "../components/BlogList";

const Home = () => {
    return (
        <div className=" min-h-screen px-10 py-2">
            <div className=" flex gap-1 flex-grow ">
                <img
                    src="/headphone-banner.jpg"
                    alt=""
                    className=" h-[200px] md:h-[400px] w-[80%] "
                />
                <div>
                    <h2 className=" text-red-600 text-2xl tracking-tighter font-bold">
                        The blog title will be very big because it must be
                    </h2>
                    <p className=" text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex expedita laboriosam quae quam libero reprehenderit
                        consequuntur cupiditate magni commodi. Vero accusantium
                        soluta eius odit porro fuga consequatur a commodi nobis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex expedita laboriosam quae quam libero reprehenderit
                        consequuntur cupiditate magni commodi. Vero accusantium
                        soluta eius odit porro fuga consequatur a commodi nobis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex expedita laboriosam quae quam libero reprehenderit
                        consequuntur cupiditate magni commodi. Vero accusantium
                        soluta eius odit porro fuga consequatur a commodi nobis!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ex expedita laboriosam quae quam libero reprehenderit
                        consequuntur cupiditate magni commodi. Vero accusantium
                        soluta eius odit porro fuga consequatur a commodi
                        nobis!Lorem ipsum dolor sit amet consectetur
                    </p>
                </div>
            </div>
            <p className=" text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                expedita laboriosam quae quam libero reprehenderit consequuntur
                cupiditate magni commodi. Vero accusantium soluta eius odit
                porro fuga consequatur a commodi nobis! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ex expedita laboriosam quae
                quam libero reprehenderit consequuntur cupiditate magni commodi.
                Vero accusantium soluta eius odit porro fuga consequatur a
                commodi nobis!Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ex expedita laboriosam quae quam libero reprehenderit
                consequuntur cupiditate magni commodi. Vero accusantium soluta
                eius odit porro fuga consequatur a commodi nobis!Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Ex expedita
                laboriosam quae quam libero reprehenderit consequuntur
                cupiditate magni commodi. Vero accusantium soluta eius odit
                porro fuga consequatur a commodi nobis! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ex expedita laboriosam quae
                quam libero reprehenderit consequuntur cupiditate magni commodi.
                Vero accusantium soluta eius odit porro fuga consequatur a
                commodi nobis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ex expedita laboriosam quae quam libero
                reprehenderit consequuntur cupiditate magni commodi. Vero
                accusantium soluta eius odit porro fuga consequatur a commodi
                nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ex expedita laboriosam quae quam libero reprehenderit
                consequuntur cupiditate magni commodi. Vero accusantium soluta
                eius odit porro fuga consequatur a commodi nobis!Lorem ipsum
                dolor sit amet consectetur
            </p>
            <BlogList />
        </div>
    );
};

export default Home;
