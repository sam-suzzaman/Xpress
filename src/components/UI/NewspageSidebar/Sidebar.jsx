"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams, useParams } from "next/navigation";

const Sidebar = ({ data }) => {
    // const pathname = usePathname();
    // const searchParams = useSearchParams();
    // const params = useParams();
    const { category } = useParams();
    return (
        <div className="drawer-side h-full absolute bg-gray-100 p-6 px-4  rounded-sm ">
            <label
                htmlFor="newsPageSidebar"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>
            <h6 className="text-[13px] font-semibold capitalize mb-4 gray-600  border-b border-gray-300 pb-1">
                Category List
            </h6>
            <ul className="menu w-[200px] p-0">
                {data?.map((item, index) => {
                    let isLastItem = data.length === index + 1;
                    let isActive = item.title.toLowerCase() == category;
                    return (
                        <li className="mb-1" key={item._id}>
                            <Link
                                href={item.title.toLowerCase()}
                                className={`capitalize text-sm tracking-wide text-black  border-neutral hover:bg-secondary hover:text-white hover:rounded-sm ${
                                    isLastItem ? "border-b-0" : "border-b"
                                } ${
                                    isActive
                                        ? "bg-primary text-white rounded-sm"
                                        : ""
                                }`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
