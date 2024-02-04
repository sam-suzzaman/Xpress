import React from "react";
import style from "./style.module.css";
import { getAllNews } from "@/utils/getAllNews/getAllNews";

const TickerBar = async () => {
    const { data } = await getAllNews();

    return (
        <div className={style.ticker_wrapper}>
            <div className={style.inner_container}>
                <div class={style.ticker_wrap}>
                    <div class={style.ticker_heading}>Breaking News</div>
                    <div class={style.ticker}>
                        {data?.slice(-5).map((news) => {
                            return (
                                <div key={news._id} class={style.ticker_item}>
                                    {news.title}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TickerBar;
