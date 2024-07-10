import { TagIcon } from "@heroicons/react/24/solid";

const ProductCart = ({
    name,
    price,
    image,
}: {
    name: string;
    price: number;
    image: string;
}) => {
    return (
        <div>
            <div className="rounded transition-colors duration-300 group-hover:bg-[#D9F2EF]">
                <div className="m-6">
                    <img src={image} alt={name} className="rounded" />
                </div>
                <div className="m-6">
                    <p className="text-base mb-2 flex items-center gap-2">
                        best selling <TagIcon className="size-4" />
                    </p>
                    <p className="text-xl mb-4">{name}</p>
                    <p className="text-2xl font-semibold mb-4">${price}</p>
                    <button className="transition-colors duration-300 bg-[#003B33] rounded py-3 px-5 text-xl text-[#D9F2EF] group-hover:bg-[#D9F2EF]">
                        shop now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
