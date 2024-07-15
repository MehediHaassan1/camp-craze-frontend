/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState, ChangeEvent } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import ProductCard from "@/components/ui/ProductCard";
import { useLocation } from "react-router-dom";
import Loading from "@/components/ui/Loading";

// Debounce function
const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const catagoryQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Products: React.FC = () => {
    const queryCatagory = catagoryQuery();
    const catagoryData = queryCatagory.get("category") || "all";
    const [searchValue, setSearchValue] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("");
    const [category, setCategory] = useState<string>(catagoryData);
    const [price, setPrice] = useState<number>(0);

    const { data, isLoading, refetch } = useGetProductsQuery({
        search: searchValue,
        sortBy,
        category,
        price,
    });

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            setSearchValue(value);
        }, 500),
        []
    );

    const handleInputChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            debouncedSearch(event.target.value);
        },
        [debouncedSearch]
    );

    const handleSortChange = (value: string) => {
        setSortBy(value);
    };

    const handleCategoryChange = (value: string) => {
        setCategory(value);
    };

    const handlePriceRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsedValue = parseInt(e.target.value);
        setPrice(parsedValue);
    };

    if (isLoading) {
        return <Loading />;
    }

    const handleClearFilter = () => {
        setSearchValue("");
        setSortBy("");
        setCategory("");
        setPrice(0);
        refetch();
    };

    return (
        <div className="my-8 md:my-12">
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-center">
                    Products
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    <div className="my-8 md:my-12 space-y-4">
                        <div className="">
                            <div className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-primary-300 focus-within:border-primary">
                                <input
                                    type="search"
                                    className="w-full px-4 py-2 text-primary-400 focus:outline-none border-none"
                                    placeholder="Search products..."
                                    value={searchValue}
                                    onChange={handleInputChange}
                                />
                                <button
                                    type="submit"
                                    className="flex items-center justify-center px-4 py-2 text-white transition-colors duration-300 bg-primary-300"
                                    style={{ height: "40px" }}
                                >
                                    <MagnifyingGlassIcon className="h-5 w-5 text-red-500" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="minmax-range"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    ${price}
                                </label>
                                <label
                                    htmlFor="minmax-range"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    $1000
                                </label>
                            </div>
                            <input
                                onChange={handlePriceRange}
                                id="minmax-range"
                                type="range"
                                min="0"
                                max="1000"
                                value={price}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                            />
                        </div>
                        <div className="w-full">
                            <Select
                                value={sortBy}
                                onValueChange={handleSortChange}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Sort Products" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Customize</SelectLabel>
                                        <SelectItem value="0">All</SelectItem>
                                        <SelectItem value="1">
                                            Price low to high
                                        </SelectItem>
                                        <SelectItem value="-1">
                                            Price high to low
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Select
                                value={catagoryData}
                                onValueChange={handleCategoryChange}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Filter Products" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Customize</SelectLabel>
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="Tents and Shelters">
                                            Tents and Shelters
                                        </SelectItem>
                                        <SelectItem value="Cooking and Dining">
                                            Cooking and Dining
                                        </SelectItem>
                                        <SelectItem value="Sleeping Gear">
                                            Sleeping Gear
                                        </SelectItem>
                                        <SelectItem value="Hiking and Trekking">
                                            Hiking and Trekking
                                        </SelectItem>
                                        <SelectItem value="Accessories and Gadgets">
                                            Accessories and Gadgets
                                        </SelectItem>
                                        <SelectItem value="Clothing and Apparel">
                                            Clothing and Apparel
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <button
                                onClick={handleClearFilter}
                                className="transition-colors duration-300 bg-[#007F6D] rounded py-2 px-5 lg:py-3 md:px-5 text-xl text-[#D9F2EF]"
                            >
                                Clear Filter
                            </button>
                        </div>
                    </div>
                    {data?.data?.length < 1 ? (
                        <div className="text-3xl md:text-5xl my-8 md:my-12 text-center md:col-span-2">
                            {" "}
                            <h1>Data not found!</h1>
                        </div>
                    ) : (
                        <div className=" md:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:col-span-2 lg:col-span-3">
                            {data?.data?.map((item: any, idx: number) => (
                                <ProductCard
                                    key={idx}
                                    {...item}
                                    delay={idx * 300}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
