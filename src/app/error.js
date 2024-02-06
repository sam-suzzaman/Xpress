"use client";
import Error from "@/components/Shared/ErrorCom/Error";
import React from "react";

const ErrorPage = ({ error, reset }) => {
    return (
        <div>
            <Error msg={error?.message} reset={reset} />
        </div>
    );
};

export default ErrorPage;
