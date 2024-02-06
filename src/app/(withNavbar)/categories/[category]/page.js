import NewsCard from "@/components/Shared/NewsCard/NewsCard";
import { getCategoryNews } from "@/utils/getCategoryNews/getCategoryNews";
import React from "react";
import style from "./style.module.css";
import { CiBoxList } from "react-icons/ci";

const CategoryNewsPage = async ({ params }) => {
    const { data: categoryNewsData } = await getCategoryNews(params.category);
    // console.log(categoryNewsData);
    return (
        <div className="w-full">
            <h3 className={style.sec_title}>
                <label
                    htmlFor="newsPageSidebar"
                    className="cursor-pointer drawer-button lg:hidden bg-blue-100 text-primary p-2 rounded-lg flex justify-center items-center hover:text-primary hover:bg-neutral mr-2"
                >
                    <CiBoxList className="text-lg" />
                </label>
                <span className="">
                    Search result for{" "}
                    <span className={style.fancy}>{params.category}</span>
                </span>
            </h3>
            {/* news row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-8">
                {categoryNewsData?.map((news) => {
                    return <NewsCard news={news} />;
                })}
            </div>
        </div>
    );
};

export default CategoryNewsPage;
