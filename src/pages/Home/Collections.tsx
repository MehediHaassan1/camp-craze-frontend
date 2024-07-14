/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ui/ProductCard";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

function getRandomIndexes(maxLength: number, count: number): number[] {
    const indexes: number[] = [];

    for (let i = 0; i < count; i++) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * maxLength);
        } while (indexes.includes(randomIndex));

        indexes.push(randomIndex);
    }

    return indexes;
}

const Collections = () => {
    const [randomProducts, setRandomProducts] = useState([] as any[]);

    const search = "";
    const sortBy = "";
    const category = '';
    const price = 0;
    const {
        data: products,
        isLoading,
        refetch,
    } = useGetProductsQuery({
        search,
        sortBy,
        category, 
        price,
    });

    useEffect(() => {
        if (isLoading) {
            return; // If still loading, do nothing
        }
        if (products?.data && products?.data.length > 0) {
            // Check if products is defined and not empty
            const randomIndexes = getRandomIndexes(products?.data.length, 6);
            const selectedProducts = randomIndexes.map(
                (index) => products?.data[index]
            );
            setRandomProducts(selectedProducts);
        }
        const interval = setInterval(() => {
            refetch(); // Refetch data every 10 seconds
        }, 10000);

        return () => clearInterval(interval);
    }, [isLoading, products, refetch]); // Depend on isLoading, products, and refetch

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
                {randomProducts.map((item, idx) => (
                    <ProductCard key={idx} {...item} delay={idx * 300} />
                ))}
            </div>
        </div>
    );
};

export default Collections;
