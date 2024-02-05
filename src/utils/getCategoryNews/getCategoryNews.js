export const getCategoryNews = async (category) => {
    const res = await fetch(
        `https://xpress-api.vercel.app/news?category=${category}`,
        {
            cache: "no-store",
        }
    );

    return res.json();
};
