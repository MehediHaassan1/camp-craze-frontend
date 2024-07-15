/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    decrementQuantity,
    incrementQuantity,
    removeProduct,
} from "@/redux/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { ArrowLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    const handleRefresh = (event:any) => {
        const message =
            "You have items in your cart. Are you sure you want to leave?";
        event.returnValue = message;
        return message;
    };
    useEffect(() => {
        if (products.length > 0) {
            window.addEventListener("beforeunload", handleRefresh);
        }

        return () => {
            window.removeEventListener("beforeunload", handleRefresh);
        };
    }, [products.length]);

    const handleQuantityDecrement = (id: string) => {
        const product = products.find((item) => item.productId === id);
        if (product!.quantity > 1) {
            dispatch(decrementQuantity(id));
        } else {
            toast.error("Minimum quantity 1");
        }
    };

    const handleQuantityIncrement = (id: string) => {
        const product = products.find((item) => item.productId === id);
        if (product!.quantity === product!.stock) {
            toast.error("Maximum quantity reached");
            return;
        }
        dispatch(incrementQuantity(id));
    };

    const calculateTotalCost = () => {
        return products
            .reduce(
                (total, product) => total + product.price * product.quantity,
                0
            )
            .toFixed(2);
    };

    const handleRemoveProduct = (id: string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeProduct(id));
                Swal.fire({
                    title: "Deleted!",
                    text: "Item has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="flex shadow-md my-10">
                    <div className="w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">
                                Shopping Cart
                            </h1>
                            <h2 className="font-semibold text-2xl">
                                {products.length} Items
                            </h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                                Product Details
                            </h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                Quantity
                            </h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                Price
                            </h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                Total
                            </h3>
                        </div>
                        {products.map((item) => (
                            <div
                                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                                key={item.productId}
                            >
                                <div className="flex w-2/5">
                                    {" "}
                                    {/* product */}
                                    <div className="w-36 rounded overflow-hidden">
                                        <img
                                            className="h-24 w-full"
                                            src={item.coverImage}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <h4 className="font-bold text-center">
                                            {item.name}
                                        </h4>
                                        <button
                                            title="Delete the product"
                                            onClick={() =>
                                                handleRemoveProduct(
                                                    item.productId
                                                )
                                            }
                                            className="font-semibold hover:text-red-500 text-gray-500 flex items-center justify-center"
                                        >
                                            <TrashIcon className="size-6 text-red-600" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <button
                                        onClick={() =>
                                            handleQuantityDecrement(
                                                item.productId
                                            )
                                        }
                                    >
                                        <Minus />
                                    </button>

                                    <input
                                        className="mx-2 border text-center w-8 focus:outline-none"
                                        type="text"
                                        min={1}
                                        value={item.quantity}
                                        max={item.stock}
                                        readOnly
                                    />

                                    <button
                                        onClick={() =>
                                            handleQuantityIncrement(
                                                item.productId
                                            )
                                        }
                                    >
                                        <Plus />
                                    </button>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    ${item.price.toFixed(2)}
                                </span>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}
                        <Link
                            to="/products"
                            className="flex font-semibold  mt-10 hover:text-[#007F6D] duration-300"
                        >
                            <ArrowLeftIcon className="size-6 mr-2" />
                            Continue Shopping
                        </Link>
                    </div>
                    <div id="summary" className="w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">
                            Order Summary
                        </h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">
                                Items - {products.length}
                            </span>
                            <span className="font-semibold text-sm">
                                ${calculateTotalCost()}
                            </span>
                        </div>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>${calculateTotalCost()}</span>
                            </div>
                            <Link to="/checkout">
                                <button
                                    disabled={products.length < 1}
                                    className="bg-[#007F6D] font-semibold hover:bg-[#006557] py-3 text-sm text-[#D9F2EF] uppercase w-full rounded duration-300 disabled:bg-slate-500"
                                >
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
