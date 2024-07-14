import { Input } from "@/components/ui/input";
import Loading from "@/components/ui/Loading";
import { useGetProductByIdQuery } from "@/redux/features/products/productsApi";
import { addProduct } from "@/redux/features/products/productsSlice";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import toast from "react-hot-toast";
// import { TProduct } from "@/types";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [orderQuantity, setOrderQuantity] = useState("1");
    const { data, isLoading } = useGetProductByIdQuery(id);
    const dispatch = useAppDispatch();

    if (isLoading) {
        return <Loading/>
    }

    const { coverImage, stock, description, price, name, _id } = data.data;

    const handleAddToCart = () => {
        if (orderQuantity > stock) {
            toast.error("Less products in the stock !");
            return;
        }
        const orderData = {
            name,
            stock,
            coverImage,
            productId: _id,
            price,
            quantity: Number(orderQuantity),
        };
        dispatch(addProduct(orderData));
        toast.success("Product added successfully");
    };

    return (
        <div>
            <div className="antialiased">
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div>
                                    <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                                        <div className="h-64 md:h-80 rounded overflow-hidden bg-gray-100 mb-4 flex items-center justify-center">
                                            <img src={coverImage} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex-1 px-4">
                                <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                                    {name}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    By Camp Craze
                                </p>

                                <div className="w-8/12 lg:w-6/12 flex items-center justify-between space-x-4 my-4">
                                    <div>
                                        <h1 className="text-3xl font-bold">
                                            $ {price}
                                        </h1>
                                    </div>
                                    <div className="">
                                        <p className="text-green-500 text-xl font-semibold">
                                            Stock
                                        </p>
                                        <p className="font-semibold">{stock}</p>
                                    </div>
                                </div>

                                <p className="text-gray-500">{description}</p>

                                <div className="flex py-4 space-x-4">
                                    <div className="flex items-center gap-4">
                                        <div className="text-center left-0 right-0 uppercase text-gray-400 tracking-wide font-semibold">
                                            Qty
                                        </div>
                                        <Input
                                            type="number"
                                            name="quantity"
                                            id="quantity"
                                            min={orderQuantity}
                                            max={stock}
                                            defaultValue={1}
                                            onChange={(e) =>
                                                setOrderQuantity(e.target.value)
                                            }
                                            className="w-32 h-8 rounded"
                                        />
                                    </div>

                                    <button
                                        onClick={handleAddToCart}
                                        className="transition-colors duration-300 bg-[#007F6D] rounded py-2 px-5 lg:py-3 md:px-5 text-xl text-[#D9F2EF]"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
