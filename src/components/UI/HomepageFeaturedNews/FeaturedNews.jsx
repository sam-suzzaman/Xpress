import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import { getCategoryNews } from "@/utils/getCategoryNews/getCategoryNews";
import Image from "next/image";
import { WiTime3 } from "react-icons/wi";
import { CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import NewsCard from "@/components/Shared/NewsCard/NewsCard";

const FeaturedNews = async ({ category }) => {
    const { data: categoryNewsData } = await getCategoryNews(category.title);
    return (
        <div className="w-full mt-16">
            <h3 className={style.sec_title}>{category?.title}</h3>
            {/* news row */}
            <div className="grid grid-cols-2 justify-between gap-8">
                {categoryNewsData?.slice(0, 2).map((news) => {
                    return <NewsCard news={news} />;
                })}
            </div>
            {/* button */}
            <div className="mt-6 flex justify-center">
                <Link
                    href={`/categories/${category.title.toLowerCase()}`}
                    className="capitalize text-[15px] tracking-wider font-medium text-secondary hover:text-primary flex justify-center items-center group border-b-[2px] border-t-[2px]  border-accent  px-3 rounded-lg"
                >
                    explore more
                    <MdOutlineKeyboardDoubleArrowRight className="text-2xl ml-1 group-hover:ml-2 transition-all duration-300" />
                </Link>
            </div>
        </div>
    );
};

export default FeaturedNews;
