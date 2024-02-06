import React from "react";

const NewsDetailsPage = ({ params }) => {
    return (
        <div>
            <h2>news id: {params.id}</h2>
        </div>
    );
};

export default NewsDetailsPage;
