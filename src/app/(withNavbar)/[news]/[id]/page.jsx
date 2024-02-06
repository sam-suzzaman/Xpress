import Comment from "@/components/UI/Comment/Comment";
import { getSingleNews } from "@/utils/getSingleNews/getSingleNews";
import Image from "next/image";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
    const { data: news } = await getSingleNews(params.id);
    return (
        <section className="flex justify-center">
            <div className="w-full max-w-[1200px] px-4 py-8 mt-10">
                <div className="grid grid-cols-12 justify-between gap-y-12 lg:gap-x-12">
                    <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="col-span-12">
                                <Image
                                    src={news.thumbnail_url}
                                    width={800}
                                    height={500}
                                    alt="thumbnail"
                                    className="w-full object-cover rounded-md"
                                />
                            </div>
                            <div className="col-span-6">
                                <Image
                                    src={news.image_url}
                                    width={800}
                                    height={500}
                                    alt="thumbnail"
                                    className="w-full object-cover rounded-md h-full max-h-[105px]"
                                />
                            </div>
                            <div className="col-span-6">
                                <Image
                                    src={news.thumbnail_url}
                                    width={800}
                                    height={500}
                                    alt="thumbnail"
                                    className="w-full object-cover rounded-md h-full max-h-[105px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
                        <h2 className="text-2xl font-medium text-primary opacity-85">
                            {news.title}
                        </h2>
                        <div className="flex justify-start items-center gap-x-4 mt-4 mb-4">
                            <div className="avatar">
                                <div className="w-[35px] rounded-full">
                                    <Image
                                        src={news.author.img}
                                        width={100}
                                        height={100}
                                        alt="avatar"
                                    />
                                </div>
                            </div>
                            <h6 className="text-[13px] font-semibold text-black opacity-75  inline-block">
                                By {news.author.name}
                                <span className="ml-2 text-xs">-</span>
                                <span className="ml-2 text-xs">
                                    {news.author.published_date}
                                </span>
                            </h6>
                        </div>
                        <div className="mb-6">
                            <h6 className="flex justify-start items-center text-[13px] font-medium text-gray-500">
                                Category:
                                <span className="ml-2 bg-gray-100 px-5 py-1 text-secondary opacity-100 rounded-lg">
                                    {news.category}
                                </span>
                            </h6>
                        </div>
                        <div className="text-sm font-medium text-justify whitespace-pre-line text-gray-700">
                            {news.details}
                        </div>
                    </div>
                </div>
                <div className="mt-16 mb-8">
                    <Comment comments={news.comments} />
                </div>
            </div>
        </section>
    );
};

export default NewsDetailsPage;
