/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ui/ProductCard";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import { TProduct } from "@/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, useCallback, useState } from "react";

// Debounce function
const debounce = (func: (...args: any[]) => void, wait: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const Products: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const { data, isLoading } = useGetProductsQuery(searchValue);

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

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="my-8 md:my-12">
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-center">
                    Products
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center my-8 md:my-12">
                    <div className="">
                        <Select>
                            <SelectTrigger className="w-[180px]">
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
                    <div className="col-span-2 w-6/12">
                        <div className="flex items-center max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-primary-300 focus-within:border-primary">
                            <input
                                type="search"
                                className="w-full px-4 py-2 text-primary-400 focus:outline-none border-none"
                                placeholder="Search products..."
                                defaultValue={searchValue}
                                onChange={handleInputChange}
                                // onChange={(e) =>
                                //     debouncedSearch(e.target.value)
                                // }
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center px-4 py-2 text-white transition-colors duration-300 bg-primary-300 "
                                style={{ height: "40px" }}
                            >
                                <MagnifyingGlassIcon className="h-5 w-5 text-red-500" />
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <Select>
                            <SelectTrigger className="w-[180px]">
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
                </div>
                <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-3 lg:gap-6">
                    {data.data.map((item: TProduct, idx: number) => (
                        <ProductCard key={idx} {...item} delay={idx * 300} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
