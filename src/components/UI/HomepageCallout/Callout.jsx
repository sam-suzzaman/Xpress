import React from "react";
import style from "./style.module.css";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple, FaWindows } from "react-icons/fa";

const Callout = () => {
    return (
        <div className="flex justify-center bg-indigo-600 mb-16">
            <div className="w-full max-w-[1200px]">
                <div class="py-12 px-4">
                    <div class="px-8 xl:px-0 mx-auto">
                        <div class="flex flex-col lg:flex-row justify-center items-center lg:flex lg:-mx-4 lg:items-center lg:justify-between xl:py-4 gap-y-8 lg:gap-y-0">
                            <div class="">
                                <h3 className="text-3xl font-semibold text-white capitalize tracking-wider text-center lg:text-left">
                                    Let's update
                                </h3>
                                <p class="text-base mt-2 text-white text-center lg:text-left">
                                    Get all updated news using our offcal
                                    application
                                </p>
                            </div>
                            <div class="flex flex-wrap justify-center gap-y-4 lg:gap-y-0 lg:justify-end gap-x-4 items-center">
                                <button class="flex justify-center flex-col items-center text-white bg-indigo-500  border border-indigo-500 py-6 px-8 rounded-md transition-all duration-300 hover:border-indigo-400">
                                    <IoLogoAndroid className="text-[50px]" />
                                    <span className="text-base mt-1 font-normal capitalize tracking-wider">
                                        android
                                    </span>
                                </button>
                                <button class="flex justify-center flex-col items-center text-white bg-indigo-500  border border-indigo-500 py-6 px-8 rounded-md transition-all duration-300 hover:border-indigo-400">
                                    <FaApple className="text-[50px]" />
                                    <span className="text-base mt-1 font-normal capitalize tracking-wider">
                                        apple(ios)
                                    </span>
                                </button>
                                <button class="flex justify-center flex-col items-center text-white bg-indigo-500  border border-indigo-500 py-6 px-8 rounded-md transition-all duration-300 hover:border-indigo-400">
                                    <FaWindows className="text-[50px]" />
                                    <span className="text-base mt-1 font-normal capitalize tracking-wider">
                                        windows
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Callout;
