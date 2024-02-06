import Sidebar from "@/components/UI/NewspageSidebar/Sidebar";
import { getAllCategories } from "@/utils/getAllCategories/getAllCategories";
import React from "react";

const layout = async ({ children }) => {
    const { data } = await getAllCategories();
    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 my-8 relative">
            <div className="drawer lg:drawer-open">
                {/* sidebar:open/close controller */}
                <input
                    id="newsPageSidebar"
                    type="checkbox"
                    className="drawer-toggle"
                />

                {/* content:right side */}
                <div className="drawer-content flex flex-col lg:ml-10">
                    {children}
                </div>
                {/* content:left sidebar */}
                <Sidebar data={data} />
            </div>
        </section>
    );
};

export default layout;
