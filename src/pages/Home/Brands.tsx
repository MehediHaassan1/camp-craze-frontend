import dometic from "../../assets/icons/dometic.svg";
import fiamma from "../../assets/icons/fiamma.svg";
import novolex from "../../assets/icons/novolex.svg";
import raise from "../../assets/icons/raise.svg";
import reimo from "../../assets/icons/reimo.svg";
import thule from "../../assets/icons/thule.svg";

const brandLogos = [dometic, fiamma, novolex, raise, reimo, thule];

const Brands = () => {
    return (
        <div className="w-full md:my-12 rounded  hidden md:block">
            <div className="md:grid grid-cols-3 lg:grid-cols-6 gap-6">
                {brandLogos.map((logo, idx) => (
                    <div key={idx} className="w-full">
                        <img
                            src={logo}
                            alt="Brand Logo"
                            className="h-20 w-full"
                        />
                    </div>
                ))}
            </div>

            <p className="p-[10px] text-center mt-8 text-xl text-bold md:w-[500px] lg:w-full mx-auto">
                Stocking over <span className="text-[#008774]">100</span> High
                Quality brands and shipping more than{" "}
                <span className="text-[#008774]">50,000</span> orders across the
                country
            </p>
        </div>
    );
};

export default Brands;
