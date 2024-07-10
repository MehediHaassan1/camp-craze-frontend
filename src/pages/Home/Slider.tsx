import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const sliderItems = [
    {
        title: "Explore the Wilderness",
        subtitle1: "ADVENTURE AWAITS",
        subtitle2: "Gear Up for Unforgettable Outdoor Experiences",
        image: "https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        title: "Peak Performance",
        subtitle1: "REACH NEW HEIGHTS",
        subtitle2: "Pushing Boundaries with High-Performance Gear",
        image: "https://images.unsplash.com/photo-1492283500419-af06ddf764be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpa2luZyUyMHNob2V8ZW58MHwwfDB8fHww",
    },
    {
        title: "Instant Adventure",
        subtitle1: "QUICK SETUP | MAXIMUM FUN",
        subtitle2: "Enjoy More Time Exploring with Instant Tents",
        image: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW5zdGFudCUyMEFkdmVudHVyZXxlbnwwfDB8MHx8fDA%3D",
    },
    {
        title: "Luxurious Camping",
        subtitle1: "COMFORT IN THE WILDERNESS",
        subtitle2: "Experience Luxury with Spacious Family Tents",
        image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJpb3VzJTIwQ2FtcGluZ3xlbnwwfDB8MHx8fDA%3D",
    },
    {
        title: "Ultimate Stability",
        subtitle1: "DEPENDABLE AND DURABLE",
        subtitle2: "Enjoy Peace of Mind with Our Most Sturdy Tents",
        image: "https://plus.unsplash.com/premium_photo-1681496295026-e18e780229b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const Slider = () => {
    return (
        <Swiper
            navigation={true}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="h-[500px] w-full my-8 md:my-12 rounded"
        >
            {sliderItems.map((item, idx) => {
                return (
                    <SwiperSlide key={idx}>
                        <div className="relative h-full w-full">
                            <img
                                className="w-full h-full object-cover"
                                src={item.image}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-white text-center">
                                    <p className="text-sm md:text-lg lg:text-xl mb-6">
                                        {item.subtitle1}
                                    </p>
                                    <h2 className="text-2xl md:text-4xl lg:text-6xl mb-4">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm md:text-lg lg:text-xl mb-8">
                                        {item.subtitle2}
                                    </p>
                                    <button className="bg-[#003B33] rounded py-3 px-5 text-xl hover:scale-110 duration-300">
                                        shop now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider;
