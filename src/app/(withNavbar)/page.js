import HomepageHeroCard from "@/components/UI/HomepageHeroCard/HomepageHeroCard";
import HomepageSidebar from "@/components/UI/HomepageSidebar/HomepageSidebar";
import TickerBar from "@/components/UI/TickerBar/TickerBar";
import { getAllNews } from "@/utils/getAllNews/getAllNews";

const HomePage = async () => {
    const { data: newsData } = await getAllNews();
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
                        
                    </div>
                </div>
                <div className="col-span-2">
                    <HomepageSidebar newsData={newsData} />
                </div>
            </div>
        </>
    );
};
export default HomePage;
