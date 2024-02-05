import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { WiTime3 } from "react-icons/wi";
import { CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";

const HomepageSidebar = ({ newsData }) => {
    return (
        <aside>
            <h3 className={style.sec_title}>Hot News</h3>
            {/* news cards */}
            <div className="">
                {/* card */}
                {newsData?.map((news) => {
                    return (
                        <Link href="/about">
                            <div className="card lg:card-side bg-base-100 mb-4 rounded-none shadow-md py-3 group">
                                <figure className=" w-full max-w-[100px]">
                                    <Image
                                        src={news?.thumbnail_url}
                                        width={800}
                                        height={100}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "cover",
                                        }}
                                        alt="thumbnail"
                                    />
                                </figure>

                                <div className="card-body py-0 pr-3 pl-6">
                                    <h2 className="card-title text-sm font-bold group-hover:text-primary transition-all duration-300">
                                        {newsData[0]?.title.length > 40
                                            ? newsData[0]?.title.slice(0, 40) +
                                              "..."
                                            : newsData[0]?.title}
                                    </h2>
                                    <p className="text-xs font-medium">
                                        {newsData[0]?.details.length > 100
                                            ? newsData[0]?.details.slice(
                                                  0,
                                                  100
                                              ) + "..."
                                            : newsData[0]?.details}
                                    </p>
                                    <div className="flex justify-start items-center gap-2 mt-1">
                                        <span className="  flex justify-start items-center gap-[4px] text-gray-600">
                                            <WiTime3 className="text-lg" />
                                            <span className="text-[11px] font-medium">
                                                {
                                                    newsData[0].author
                                                        .published_date
                                                }
                                            </span>
                                        </span>
                                        <span className="  flex justify-start items-center gap-[4px] text-gray-600">
                                            <FaRegEye className="text-lg" />
                                            <span className="text-[11px] font-medium ">
                                                {newsData[0].total_view}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default HomepageSidebar;
