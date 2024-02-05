"use client";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const menuItems = [
    {
        _id: 1,
        title: "home",
        href: "/",
    },
    {
        _id: 2,
        title: "news",
        href: "/news",
    },
    {
        _id: 3,
        title: "about",
        href: "/about",
    },
    {
        _id: 4,
        title: "contact",
        href: "/contact",
    },
];

const Navbar = () => {
    const pathname = usePathname();

    const Menu = (
        <>
            {menuItems.map((item) => {
                const isActive = pathname == item.href;
                return (
                    <li
                        key={item._id}
                        className={`capitalize font-medium ${
                            isActive ? "text-primary" : "text-black"
                        }`}
                    >
                        <Link href={item.href}>{item.title}</Link>
                    </li>
                );
            })}
        </>
    );

    return (
        <div className="bg-white flex justify-center shadow-md px-4 md:px-8 sticky top-0 z-20">
            <div className="navbar bg-base-100  max-w-[1200px]">
                <div className="navbar-start">
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="brand"
                            width={150}
                            height={120}
                        />
                    </Link>
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 hidden md:flex">
                        {Menu}
                    </ul>
                    {/* toggle button */}
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn px-4 md:hidden bg-neutral"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {Menu}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
