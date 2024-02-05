import Callout from "@/components/UI/HomepageCallout/Callout";
import FeaturedNews from "@/components/UI/HomepageFeaturedNews/FeaturedNews";
import HomepageHeroCard from "@/components/UI/HomepageHeroCard/HomepageHeroCard";
import HomepageSidebar from "@/components/UI/HomepageSidebar/HomepageSidebar";
import TickerBar from "@/components/UI/TickerBar/TickerBar";
import { getAllCategories } from "@/utils/getAllCategories/getAllCategories";
import { getAllNews } from "@/utils/getAllNews/getAllNews";

const HomePage = async () => {
    const { data: newsData } = await getAllNews();
    const { data: cateogriesData } = await getAllCategories();
    return (
        <>
            <TickerBar />
            <div className="grid grid-cols-5 gap-12 mt-8 mb-16 w-full max-w-[1200px] mx-auto">
                <div className="col-span-3">
                    <div className="w-full">
                        <HomepageHeroCard newsData={newsData} />
                    </div>

                    {/* Category news */}
                    <div className="">
                        {cateogriesData?.slice(1).map((category) => {
                            return (
                                <FeaturedNews
                                    key={category._id}
                                    category={category}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="col-span-2">
                    <HomepageSidebar newsData={newsData} />
                </div>
            </div>
            {/* callout */}
            <Callout />
        </>
    );
};
export default HomePage;
