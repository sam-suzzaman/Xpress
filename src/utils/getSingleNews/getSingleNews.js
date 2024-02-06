export const getSingleNews = async (id) => {
    const res = await fetch(`https://xpress-api.vercel.app/news/${id}`, {
        cache: "no-store",
    });
    return res.json();
};
