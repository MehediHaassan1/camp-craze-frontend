import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { useAppSelector } from "@/redux/hook";

const Navbar = () => {
    const products = useAppSelector((state) => state.products.products);
    
    const navigation = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/products",
            name: "Products",
        },
        {
            path: "/products-management",
            name: "Products Management",
        },
        {
            path: "/about-us",
            name: "About",
        },
    ];

    const [isOpen, setOpen] = useState(false);

    return (
        <div className="flex items-center justify-between">
            <div>
                <img
                    className="hover:scale-90 duration-300"
                    src={logo}
                    alt="camp craze"
                />
            </div>
            <div className="flex items-center">
                {/* Large device menu */}
                <div className="hidden lg:flex items-center justify-between">
                    {navigation.map((item, idx) => {
                        return (
                            <NavLink
                                to={item.path}
                                key={idx}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active px-4 py-3 rounded text-base text-[#007F6D] mx-4"
                                        : isPending
                                        ? "pending"
                                        : "px-4 py-3 rounded text-base text-[#007F6D] mx-4"
                                }
                            >
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <Link
                        to="/wishlist"
                        className="px-2 py-1 md:px-4 md:py-3 rounded text-base text-[#007F6D]"
                    >
                        <HeartIcon className="size-6" />
                    </Link>
                    <Link
                        to="/cart"
                        className="relative px-2 py-1 md:px-4 md:py-3 rounded text-base text-[#007F6D]"
                    >
                        <ShoppingBagIcon className="size-6" />
                        <p className="absolute right-0 top-0 size-7 rounded-full bg-white flex items-center justify-center font-bold">
                            {products.length > 0 ? products.length : 0}
                        </p>
                    </Link>
                    <div className="lg:hidden">
                        <Hamburger
                            duration={0.5}
                            size={24}
                            toggled={isOpen}
                            toggle={setOpen}
                        />
                    </div>
                </div>

                {/* Mobile menu */}

                <div className="z-10">
                    <ul
                        className={`${
                            isOpen ? "top-[56px] md:top-[60px]" : "-top-full"
                        } fixed origin-top right-0 w-full duration-500 h-full bg-[#D9F2EF] py-4 px-4 space-y-4`}
                    >
                        {navigation.map((item, idx) => (
                            <li key={idx}>
                                <NavLink
                                    to={item.path}
                                    key={idx}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "w-full px-4 py-3 rounded text-base text-[#D9F2EF] bg-[#007F6D] inline-block"
                                            : "w-full px-4 py-3 rounded text-base text-[#007F6D]"
                                    }
                                    onClick={() => setOpen(false)}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
