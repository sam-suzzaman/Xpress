import Link from "next/link";
import React from "react";
import Image from "next/image";
import { WiTime3 } from "react-icons/wi";
import { CiUser } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const NewsCard = ({ news }) => {
    return (
        <Link
            href={`/${news.category.toLowerCase()}/${news._id}`}
            key={news._id}
        >
            <div className="card w-full bg-base-100 shadow-xl rounded-lg group h-full">
                <figure className="relative">
                    <Image
                        src={news?.thumbnail_url}
                        width={800}
                        height={100}
                        style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "188px",
                            objectFit: "cover",
                        }}
                        alt="thumbnail"
                    />
                    <span className="absolute left-0 bottom-1 px-3 py-2 bg-primary bg-opacity-80 text-white text-xs hidden group-hover:inline-block ">
                        {news?.category}
                    </span>
                </figure>
                <div className="card-body max-[400px]:px-4">
                    <h2 className="card-title text-base group-hover:text-primary transition duration-300">
                        {news?.title.length > 40
                            ? news?.title.slice(0, 40) + "..."
                            : news?.title}
                    </h2>
                    <div className="flex justify-start items-center gap-2 my-2">
                        <span className="  flex justify-start items-center gap-[4px] text-gray-600">
                            <WiTime3 className="text-lg" />
                            <span className="text-[11px] font-medium ">
                                {news.author.published_date}
                            </span>
                        </span>
                        <span className=" ml-2 flex justify-start items-center gap-[4px] text-gray-600">
                            <FaRegEye className="text-lg" />
                            <span className="text-[11px] font-medium ">
                                {news.total_view}
                            </span>
                        </span>
                    </div>
                    <p className="text-xs font-medium">
                        {news?.details.length > 100
                            ? news?.details.slice(0, 100) + "..."
                            : news?.details}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
