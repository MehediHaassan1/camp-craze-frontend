import { useUpdateStockWithOrderQuantityMutation } from "@/redux/features/orders/ordersApi";
import { orderComplete } from "@/redux/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TCartProduct, TUser } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [updateQuantity] = useUpdateStockWithOrderQuantityMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TUser>();

    const [deliveryOption, setDeliveryOption] = useState("Home Delivery");

    const products = useAppSelector((state) => state.products.products);
    const calculateTotalCost = () => {
        return products
            .reduce(
                (total, product) => total + product.price * product.quantity,
                0
            )
            .toFixed(2);
    };

    const onSubmit = async (data: TUser) => {
        data.orderedProducts = [...products];
        data.deliveryOption = deliveryOption;

        if (deliveryOption === "Pay Online") {
            navigate("/stripe-payment");
        } else {
            const res = await updateQuantity(data);
            if (res.data?.success) {
                toast.success(res.data?.message);
                navigate("/order-complete");
                dispatch(orderComplete());
            }
        }
    };

    return (
        <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-5xl font-bold mb-8">Checkout</h2>
                <h2 className="my-8 text-2xl">User Information</h2>
                <div>
                    <div className="">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="max-w-lg mx-auto"
                        >
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        First name
                                    </label>
                                    <input
                                        placeholder="John"
                                        type="text"
                                        {...register("name.firstName", {
                                            required: "First name is required",
                                        })}
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                            errors.name?.firstName
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                    />
                                    {errors.name?.firstName && (
                                        <span className="text-red-500 text-xs">
                                            {errors.name?.firstName.message}
                                        </span>
                                    )}
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        placeholder="Doe"
                                        type="text"
                                        {...register("name.lastName", {
                                            required: "Last name is required",
                                        })}
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                            errors.name?.lastName
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                    />
                                    {errors.name?.lastName &&
                                        typeof errors.name?.lastName.message ===
                                            "string" && (
                                            <span className="text-red-500 text-xs">
                                                {errors.name?.lastName.message}
                                            </span>
                                        )}
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        placeholder="john.doe@example.com"
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                                message: "Email is not valid",
                                            },
                                        })}
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                            errors.email
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500 text-xs">
                                            {errors.email.message}
                                        </span>
                                    )}
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        Phone number
                                    </label>
                                    <input
                                        placeholder="123-456-7890"
                                        type="tel"
                                        {...register("phone", {
                                            required:
                                                "Phone number is required",
                                            pattern: {
                                                value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                                                message:
                                                    "Phone number is not valid",
                                            },
                                        })}
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                            errors.phone
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                    />
                                    {errors.phone && (
                                        <span className="text-red-500 text-xs">
                                            {errors.phone.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="address"
                                    className="block text-sm text-gray-500 dark:text-gray-400"
                                >
                                    Address
                                </label>
                                <input
                                    placeholder="123 Main St"
                                    type="text"
                                    {...register("address.address", {
                                        required: "Address is required",
                                    })}
                                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                        errors.address
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                />
                                {errors.address?.address && (
                                    <span className="text-red-500 text-xs">
                                        {errors.address?.address.message}
                                    </span>
                                )}
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="city"
                                    className="block text-sm text-gray-500 dark:text-gray-400"
                                >
                                    City
                                </label>
                                <input
                                    placeholder="New York"
                                    type="text"
                                    {...register("address.city", {
                                        required: "City is required",
                                    })}
                                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                        errors.address?.city
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                />
                                {errors.address?.city && (
                                    <span className="text-red-500 text-xs">
                                        {errors.address?.city.message}
                                    </span>
                                )}
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <label
                                        htmlFor="address.state"
                                        className="block text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        State
                                    </label>
                                    <input
                                        placeholder="NY"
                                        type="text"
                                        {...register("address.state", {
                                            required: "State is required",
                                        })}
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                            errors.address?.state
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                    />
                                    {errors.address?.state &&
                                        typeof errors.address?.state.message ===
                                            "string" && (
                                            <span className="text-red-500 text-xs">
                                                {errors.address?.state.message}
                                            </span>
                                        )}
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <label
                                        htmlFor="address.postalCode"
                                        className="block text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        ZIP/Postal code
                                    </label>
                                    <input
                                        placeholder="12345"
                                        type="text"
                                        {...register("address.postalCode", {
                                            required: "Postal code is required",
                                        })}
                                        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                            errors.address?.postalCode
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                    />
                                    {errors.address?.postalCode && (
                                        <span className="text-red-500 text-xs">
                                            {errors.address?.postalCode.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <label
                                    htmlFor="country"
                                    className="block text-sm text-gray-500 dark:text-gray-400"
                                >
                                    Country
                                </label>
                                <input
                                    placeholder="United States"
                                    type="text"
                                    {...register("address.country", {
                                        required:
                                            "address?.country is required",
                                    })}
                                    className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 ${
                                        errors.address?.country
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } appearance-none focus:outline-none focus:border-[#007F6D]`}
                                />
                                {errors.address?.country && (
                                    <span className="text-red-500 text-xs">
                                        {errors.address?.country.message}
                                    </span>
                                )}
                            </div>
                            <button
                                disabled={products.length < 1}
                                type="submit"
                                className="w-full rounded text-white bg-[#007F6D] hover:bg-[#005f56] focus:outline-none focus:ring-4 focus:ring-[#007F6D] font-medium text-sm px-5 py-2.5 mr-2 mb-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="my-8 text-2xl">Order Summary Overview</h2>
                {products.map((product: TCartProduct) => (
                    <div
                        key={product.productId}
                        className="grid grid-cols-5 md:grid-cols-6 border-b-2 mb-4 pb-4"
                    >
                        <div className="col-span-1">
                            <img
                                src={product.coverImage}
                                alt={product.name}
                                className="w-16 h-16 md:w-24 md:h-24"
                            />
                        </div>
                        <div className="col-span-3 md:col-span-4 flex flex-col justify-between md:pr-8">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-gray-600">
                                {product.quantity} x ${product.price}
                            </p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center">
                            <p className="font-semibold">
                                ${(product.quantity * product.price).toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="text-right">
                    <h3 className="text-xl font-semibold">
                        Total: ${calculateTotalCost()}
                    </h3>
                    <div className="my-4">
                        <div className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="Home Delivery"
                                name="deliveryOption"
                                value="Home Delivery"
                                checked={deliveryOption === "Home Delivery"}
                                onChange={() =>
                                    setDeliveryOption("Home Delivery")
                                }
                                className="mr-2"
                            />
                            <label
                                htmlFor="Home Delivery"
                                className="text-gray-600"
                            >
                                Home Delivery
                            </label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="Pay Online"
                                name="deliveryOption"
                                value="Pay Online"
                                checked={deliveryOption === "Pay Online"}
                                onChange={() => setDeliveryOption("Pay Online")}
                                className="mr-2"
                            />
                            <label
                                htmlFor="Pay Online"
                                className="text-gray-600"
                            >
                                Pay Online
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
