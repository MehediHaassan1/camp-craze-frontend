import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const CampPlan = () => {
    return (
        <div className="my-8 md:my-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl">
                <span className="text-[#007F6D]">Adventure</span> Awaits
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12 md:my-16 space-y-8 md:space-y-0">
                <div className="bg-[#D9F2EF] h-80 w-full  rounded relative group hover:cursor-pointer">
                    <div className="flex justify-center items-center leading-none">
                        <img
                            src="https://images.unsplash.com/photo-1512757776214-26d36777b513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwZ3VpZGVzfGVufDB8fDB8fHww"
                            alt="pic"
                            className="h-72 w-80 rounded-md shadow-2xl mt-6 transform -translate-y-16 transition duration-700 object-cover z-10 group-hover:scale-95"
                        />
                    </div>
                    <div className="p-5 w-full absolute bottom-0 flex items-center justify-between group-hover:scale-105 duration-300">
                        <p className=" text-xl">Travel Guides</p>
                        <ArrowLongRightIcon className="size-6" />
                    </div>
                </div>
                <div className="bg-[#D9F2EF] h-80 w-full  rounded relative group hover:cursor-pointer">
                    <div className="flex justify-center items-center leading-none">
                        <img
                            src="https://images.unsplash.com/photo-1619537903549-0981d6bca911?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENhbXBmaXJlfGVufDB8fDB8fHww"
                            alt="pic"
                            className="h-72 w-80 rounded-md shadow-2xl mt-6 transform -translate-y-16 transition duration-700 object-cover z-10 group-hover:scale-95"
                        />
                    </div>
                    <div className="p-5 w-full absolute bottom-0 flex items-center justify-between group-hover:scale-105 duration-300">
                        <p className=" text-xl">Campfire Activities</p>
                        <ArrowLongRightIcon className="size-6" />
                    </div>
                </div>
                <div className="bg-[#D9F2EF] h-80 w-full  rounded relative group hover:cursor-pointer">
                    <div className="flex justify-center items-center leading-none">
                        <img
                            src="https://images.unsplash.com/photo-1657771413745-270f6622221d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwUGVybWl0c3xlbnwwfHwwfHx8MA%3D%3D"
                            alt="pic"
                            className="h-72 w-80 rounded-md shadow-2xl mt-6 transform -translate-y-16 transition duration-700 object-cover z-10"
                        />
                    </div>
                    <div className="p-5 w-full absolute bottom-0 flex items-center justify-between group-hover:scale-105 duration-300">
                        <p className=" text-xl">Permits and Regulations</p>
                        <ArrowLongRightIcon className="size-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampPlan;
