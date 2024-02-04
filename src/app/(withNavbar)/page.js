import TickerBar from "@/components/UI/TickerBar/TickerBar";

export default function HomePage() {
    return (
        <>
            <TickerBar />
            <div className="grid grid-cols-4 mt-8 mb-16 w-full max-w-[1200px] mx-auto">
                <div className="col-span-3">left section</div>
                <div className="col-span 1">right section</div>
            </div>
        </>
    );
}
