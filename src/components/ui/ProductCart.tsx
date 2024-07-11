import { TagIcon } from "@heroicons/react/24/solid";

const ProductCart = ({
    name,
    price,
    image,
    delay,
}: {
    name: string;
    price: number;
    delay: number;
    image: string;
}) => {
    return (
        <div data-aos="fade-up" data-aos-delay={delay}>
            <div className="rounded">
                <div className="m-6">
                    <img src={image} alt={name} className="rounded" />
                </div>
                <div className="m-6">
                    <p className="text-base mb-2 flex items-center gap-2">
                        best selling <TagIcon className="size-4" />
                    </p>
                    <p className="text-xl mb-4">{name}</p>
                    <p className="text-2xl font-semibold mb-4">${price}</p>
                    <button className="transition-colors duration-300 bg-[#007F6D] rounded py-2 px-5 lg:py-3 md:px-5 text-xl text-[#D9F2EF]">
                        shop now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
