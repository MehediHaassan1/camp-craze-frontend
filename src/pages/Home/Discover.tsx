import ReactPlayer from "react-player";

const Discover = () => {
    return (
        <div className="my-8 md:my-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl">
                We Live To <span className="text-[#007F6D]">Discover</span>
            </h1>
            <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-2 md:gap-6 md:h-[400px] content-center">
                <div className="rounded overflow-hidden">
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        playing={true}
                        muted
                        url="https://www.youtube.com/watch?v=5myfOaVzKw0"
                    />
                </div>
                <div className="w-full lg:w-3/4 mx-auto text-center text-slate-600 text-base mt-6 md:mt-0">
                    <p className="mb-4">Camp Craze</p>
                    <p className="mb-8">
                        Born around a campfire, Camp Craze is committed to
                        enriching outdoor experiences with sustainable apparel,
                        footwear, and equipment solutions. Their innovative
                        designs cater to hiking, trekking, commuting, camping,
                        and bikepacking, ensuring every adventure is
                        unforgettable. Camp Craze inspires a spirit of
                        wanderlust, encouraging people to recharge and find
                        solace in nature. From the first steps of exploration to
                        life's final journey, every moment is a chance for
                        discovery.
                    </p>
                    <button className="transition-colors duration-300 bg-[#007F6D] rounded py-2 px-5  lg:py-3 md:px-5 text-sm lg:text-xl text-[#D9F2EF]">
                        SHOP THEIR LATEST COLLECTION
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discover;
