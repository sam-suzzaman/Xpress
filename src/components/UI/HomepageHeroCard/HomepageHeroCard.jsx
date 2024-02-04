import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomepageHeroCard = ({ newsData }) => {
    // console.log(newsData[0]);
    return (
        <Link href="/about">
            <div className="card w-full bg-base-100 shadow-xl rounded-lg group">
                <figure className="relative">
                    <Image
                        src={newsData[0]?.thumbnail_url}
                        width={800}
                        height={100}
                        style={{
                            width: "100%",
                            height: "450px",
                            objectFit: "cover",
                        }}
                        alt="thumbnail"
                    />
                    <span className="absolute left-0 bottom-1 px-3 py-2 bg-primary bg-opacity-80 text-white text-sm hidden group-hover:inline-block">
                        {newsData[0]?.category}
                    </span>
                </figure>
                <div className="card-body">
                    <h2 className="card-title group-hover:text-primary">
                        {newsData[0]?.title.length > 80
                            ? newsData[0]?.title.slice(0, 80) + "..."
                            : newsData[0]?.title}
                    </h2>
                    <p>
                        {newsData[0]?.details.length > 200
                            ? newsData[0]?.details.slice(0, 200) + "..."
                            : newsData[0]?.details}
                    </p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </Link>
    );
};

export default HomepageHeroCard;
