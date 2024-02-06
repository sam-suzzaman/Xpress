import React from "react";
import style from "./style.module.css";

const Loader = () => {
    return (
        <div className="mt-6 lg:mt-12 flex justify-center items-center">
            <div class={style.spinner_container}>
                <div class={style.spinner}>
                    <div class={style.spinner}>
                        <div class={style.spinner}>
                            <div class={style.spinner}>
                                <div class={style.spinner}>
                                    <div class={style.spinner}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
