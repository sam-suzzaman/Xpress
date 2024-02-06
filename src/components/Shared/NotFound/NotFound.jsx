import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const NotFound = () => {
    return (
        <div className={style.sec_container}>
            <div className="flex flex-col items-center">
                <img
                    src="https://assets.codepen.io/1538474/404.svg"
                    class={style.logo_404}
                />

                <p class={style.title}>Opps !!!</p>
                <p class={style.subtitle}>
                    You’re either requesting a page that's no longer here.
                    <br /> or misspelling the URL
                </p>
                <div align="center">
                    <Link class={style.back_btn} href="/">
                        <IoIosArrowBack className=" text-xl" /> Back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
