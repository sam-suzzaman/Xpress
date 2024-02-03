import React from "react";

const layout = ({ children }) => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            {children}
        </div>
    );
};

export default layout;
