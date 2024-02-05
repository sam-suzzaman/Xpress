export const getAllCategories = async () => {
    const res = await fetch("https://xpress-api.vercel.app/categories");
    return res.json();
};
