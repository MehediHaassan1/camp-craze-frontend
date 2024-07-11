import ProductCart from "@/components/ui/ProductCart";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const bestSellingProducts = [
    {
        name: "Camping Tent",
        price: 69.99,
        category: "Camping Gear",
        image: "https://plus.unsplash.com/premium_photo-1663045950876-51a31ccce956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fENhbXBpbmclMjBUZW50JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Sleeping Bag",
        price: 49.99,
        category: "Sleeping Bags",
        image: "https://images.unsplash.com/photo-1627907229506-d9a90984a269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2xlZXBpbmclMjBiYWd8ZW58MHwwfDB8fHww",
    },
    {
        name: "Camping Stove",
        price: 79.99,
        category: "Cooking Equipment",
        image: "https://images.unsplash.com/photo-1664429764866-227d36d8c1a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fENhbXBpbmclMjBTdG92ZXxlbnwwfDB8MHx8fDA%3D",
    },
    {
        name: "Camping Tent",
        price: 69.99,
        category: "Camping Gear",
        image: "https://plus.unsplash.com/premium_photo-1663045950876-51a31ccce956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fENhbXBpbmclMjBUZW50JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Sleeping Bag",
        price: 49.99,
        category: "Sleeping Bags",
        image: "https://images.unsplash.com/photo-1627907229506-d9a90984a269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2xlZXBpbmclMjBiYWd8ZW58MHwwfDB8fHww",
    },
    {
        name: "Camping Stove",
        price: 79.99,
        category: "Cooking Equipment",
        image: "https://images.unsplash.com/photo-1664429764866-227d36d8c1a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fENhbXBpbmclMjBTdG92ZXxlbnwwfDB8MHx8fDA%3D",
    },
];

const Collections = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl lg:text-6xl">
                    Collections
                </h1>
                <div className="flex items-center gap-4">
                    <p className="text-base md:text-xl">See All</p>
                    <ArrowLongRightIcon className="size-6 text-[#007F6D]" />
                </div>
            </div>
            <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-3 lg:gap-6">
                {bestSellingProducts.map((item, idx) => {
                    return (
                        <ProductCart key={idx} {...item} delay={idx * 300} />
                    );
                })}
            </div>
        </div>
    );
};

export default Collections;
