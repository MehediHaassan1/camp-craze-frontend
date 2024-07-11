import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { HeartIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = () => {
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
            path: "/about",
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
                                        ? "active px-4 py-3 rounded text-base text-[#003B33] mx-4"
                                        : isPending
                                        ? "pending"
                                        : "px-4 py-3 rounded text-base text-[#003B33] mx-4"
                                }
                            >
                                {item.name}
                            </NavLink>
                        );
                    })}
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    <NavLink
                        to="/wishlist"
                        className="px-2 py-1 md:px-4 md:py-3 rounded text-base text-[#003B33]"
                    >
                        <HeartIcon className="size-6" />
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className="px-2 py-1 md:px-4 md:py-3 rounded text-base text-[#003B33]"
                    >
                        <ShoppingBagIcon className="size-6" />
                    </NavLink>
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
                                            ? "w-full px-4 py-3 rounded text-base text-[#D9F2EF] bg-[#003B33] inline-block"
                                            : "w-full px-4 py-3 rounded text-base text-[#003B33]"
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
