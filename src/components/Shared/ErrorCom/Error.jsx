"use client";
import React from "react";
import style from "./style.module.css";

const Error = ({ msg, reset }) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="">
                <h3 className="text-3xl font-semibold text-gray-500 mb-3">
                    Sorry !!!
                </h3>
                <h3 className="text-base font-medium text-red-600 capitalize">
                    {msg}
                </h3>
                <button
                    className="btn btn-sm capitalize btn-secondary rounded-sm mt-4"
                    onClick={reset}
                >
                    try again
                </button>
            </div>
        </div>
    );
};

export default Error;
