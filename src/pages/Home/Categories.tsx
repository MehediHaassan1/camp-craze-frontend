import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import firstAidKit from "../../assets/icons/first-aid-kit.svg";
import tent from "../../assets/icons/tent.svg";
import backpack from "../../assets/icons/backpack.svg";
import cooking from "../../assets/icons/cooking.svg";

const categoriesData = [
    {
        name: "First Aid Kit",
        icon: firstAidKit,
    },
    {
        name: "Tent",
        icon: tent,
    },
    {
        name: "Backpack",
        icon: backpack,
    },
    {
        name: "Cooking",
        icon: cooking,
    },
];

const Categories = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl lg:text-6xl">Categories</h1>
                <div className="flex items-center gap-4">
                    <p className="text-base md:text-xl">See All</p>
                    <ArrowLongRightIcon className="size-6 text-[#007F6D]" />
                </div>
            </div>
            <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoriesData.map((category, idx) => {
                    return (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={idx * 300}
                            key={category.name}
                            className="h-[300px] flex items-center justify-center"
                        >
                            <div className="w-[250px] h-[250px] bg-[#D9F2EF] flex items-center justify-center rounded-full">
                                <img
                                    src={category.icon}
                                    alt={category.name}
                                    className="side-[150px]"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;
