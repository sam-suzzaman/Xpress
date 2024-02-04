import HomepageHeroCard from "@/components/UI/HomepageHeroCard/HomepageHeroCard";
import TickerBar from "@/components/UI/TickerBar/TickerBar";
import { getAllNews } from "@/utils/getAllNews/getAllNews";

const HomePage = async () => {
    const { data: newsData } = await getAllNews();
    return (
        <>
            <TickerBar />
            <div className="grid grid-cols-4 gap-12 mt-8 mb-16 w-full max-w-[1200px] mx-auto">
                <div className="col-span-3">
                    <div className="w-full">
                        <HomepageHeroCard newsData={newsData} />
                    </div>
                </div>
                <div className="col-span 1">right section</div>
            </div>
        </>
    );
};
export default HomePage;
