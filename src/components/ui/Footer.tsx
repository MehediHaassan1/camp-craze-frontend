import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12">
                        <h4 className="text-3xl font-semibold">
                            Let's keep in{" "}
                            <span className="text-[#007F6D]">touch!</span>
                        </h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2
                            business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6 flex gap-6">
                            <button
                                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full flex hover:text-[#007F6d] duration-300"
                                type="button"
                            >
                                <FaGithub className="w-8 h-8" />
                            </button>
                            <button
                                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full flex hover:text-[#007F6d] duration-300"
                                type="button"
                            >
                                <FaFacebookF className="w-8 h-8" />
                            </button>
                            <button
                                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full flex hover:text-[#007F6d] duration-300"
                                type="button"
                            >
                                <FaInstagram className="w-8 h-8" />
                            </button>
                            <button
                                className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full flex hover:text-[#007F6d] duration-300"
                                type="button"
                            >
                                <FaTwitter className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap md:flex-nowrap  items-top mb-6">
                            <div className="w-full lg:w-4/12 ml-auto">
                                <span className="block uppercase text-[#007F6D] font-semibold mb-2">
                                    Useful Links
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="block pb-2" href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a className="block pb-2" href="#">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a className="block pb-2" href="#">
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a className="block pb-2" href="#">
                                            Free Products
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12">
                                <span className="block uppercase text-[#007F6D] font-semibold mb-2">
                                    Other Resources
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="block pb-2" href="#">
                                            MIT License
                                        </a>
                                    </li>
                                    <li>
                                        <a className="block pb-2" href="#">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a className="block pb-2" href="#">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a className="block pb-2" href="#">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-5/12 px-4 mx-auto text-center">
                        <div className="text-lg font-semibold py-1">
                            Copyright © {new Date().getFullYear()} Camp{" "}
                            <span className="text-[#007F6D]">Craze</span>. All
                            Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
