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
        <div className="drawer-side h-full absolute">
            <label
                htmlFor="newsPageSidebar"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>
            <ul className="menu p-4 px-2 w-[200px] bg-gray-100 rounded-sm ">
                {data?.map((item, index) => {
                    let isLastItem = data.length === index + 1;
                    let isActive = item.title.toLowerCase() == category;
                    console.log(isActive);
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
