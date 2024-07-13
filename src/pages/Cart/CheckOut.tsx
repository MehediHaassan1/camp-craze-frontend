import { useAppSelector } from "@/redux/hook";
import { Link } from "react-router-dom";

const CheckOut = () => {
    const products = useAppSelector((state) => state.products.products);
    const calculateTotalCost = () => {
        return products
            .reduce(
                (total, product) => total + product.price * product.quantity,
                0
            )
            .toFixed(2);
    };
    return (
        <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h2 className="text-5xl font-bold mb-8">Checkout</h2>
                <h2 className="my-8 text-2xl">User Information</h2>
                <div>
                    <div className="">
                        <form className="max-w-lg mx-auto">
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="floating_first_name"
                                        id="floating_first_name"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#007F6D] peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="floating_first_name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#007F6D] peer-focus:dark:text-[#007F6D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        First name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="floating_last_name"
                                        id="floating_last_name"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#007F6D] peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="floating_last_name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#007F6D] peer-focus:dark:text-[#007F6D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Last name
                                    </label>
                                </div>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="email"
                                    name="floating_email"
                                    id="floating_email"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#007F6D] peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#007F6D] peer-focus:dark:text-[#007F6D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email address
                                </label>
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#007F6D] peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="address"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#007F6D] peer-focus:dark:text-[#007F6D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Address
                                </label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        name="street"
                                        id="street"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#007F6D] peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="street"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#007F6D] peer-focus:dark:text-[#007F6D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Street
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="postalCode"
                                        id="postalCode"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#007F6D] peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="postalCode"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#007F6D] peer-focus:dark:text-[#007F6D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Postal Code
                                    </label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        name="city"
                                        id="city"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#007F6D] peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="city"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#007F6D] peer-focus:dark:text-[#007F6D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        City
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="text"
                                        name="state"
                                        id="state"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#007F6D] peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="state"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#007F6D] peer-focus:dark:text-[#007F6D] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        State
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold mb-8">Product Details</h2>
                    <h2 className="font-semibold text-2xl">
                        {products.length} Items
                    </h2>
                </div>
                <div>
                    <div className="bg-gray-100">
                        <div className=" mx-auto mt-10">
                            <div className="flex shadow-md my-10">
                                <div className="w-full bg-white overflow-x-hidden">
                                    <div className="flex items-center justify-between mb-5">
                                        <h3 className="flex-1 font-semibold text-gray-600 text-xs uppercase">
                                            Product Image
                                        </h3>
                                        <h3 className="flex-1 font-semibold text-gray-600 text-xs uppercase text-center">
                                            Product Name
                                        </h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                            Quantity
                                        </h3>
                                        <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                                            Price
                                        </h3>
                                    </div>
                                    {products.map((item) => (
                                        <div
                                            className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                                            key={item.productId}
                                        >
                                            <div className="flex w-full items-center justify-between">
                                                <div className="w-36 rounded overflow-hidden">
                                                    <img
                                                        className="h-16 w-28"
                                                        src={item.image}
                                                        alt={item.name}
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-between ml-4 flex-grow">
                                                    <h4 className="font-bold text-center">
                                                        {item.name}
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex justify-center w-1/5">
                                                <input
                                                    className="mx-2 border text-center w-8 focus:outline-none"
                                                    type="text"
                                                    min={1}
                                                    value={2}
                                                    max={item.stock}
                                                    readOnly
                                                />
                                            </div>
                                            <span className="text-center w-1/5 font-semibold text-sm">
                                                ${item.price.toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                    <hr />

                                    <div className="flex items-center justify-between py-6">
                                        <div>Total cost</div>
                                        <div>{calculateTotalCost()}</div>
                                    </div>

                                    <Link to={`/order-complete`}>
                                        <button
                                            disabled={products.length < 1}
                                            className="bg-[#007F6D] font-semibold hover:bg-[#006557] py-3 text-sm text-[#D9F2EF] uppercase w-full rounded duration-300 disabled:bg-slate-500"
                                        >
                                            Order now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
