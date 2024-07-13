/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "@/components/ui/ProductCard";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import { TProduct } from "@/types";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const BestSellingProducts = () => {
    const navigate = useNavigate();
    const search = '';
    const sortBy = '';
    // const [search, setSearch] = useState('');
    //     const [sortBy, setSortBy] = useState('');
    const { data, isLoading } = useGetProductsQuery({ search, sortBy });
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    const products = data?.data?.filter(
        (pd: Record<string, any>) => pd.tag === "recommended"
    );

    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-4xl lg:text-6xl">
                    <span className="text-[#007F6D]">Best</span> Selling
                </h1>
                <div
                    className="flex items-center gap-4 hover:cursor-pointer"
                    onClick={() => navigate("/products")}
                >
                    <p className="text-base md:text-xl">See All</p>
                    <ArrowLongRightIcon className="size-6 text-[#007F6D]" />
                </div>
            </div>
            <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-3 lg:gap-6">
                {products?.map((item: TProduct, idx: number) => {
                    return (
                        <ProductCard key={idx} {...item} delay={idx * 300} />
                    );
                })}
            </div>
        </div>
    );
};

export default BestSellingProducts;
