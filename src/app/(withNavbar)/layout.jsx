import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="px-4 md:px-8">{children}</div>
            <Footer />
        </div>
    );
};

export default layout;
