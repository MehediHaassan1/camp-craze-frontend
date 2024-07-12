import { TagIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const ProductCard = ({
    _id,
    name,
    price,
    coverImage,
    delay,
    tag,
}: {
    _id: string;
    name: string;
    price: number;
    delay: number;
    coverImage: string;
    tag: string;
}) => {
    const navigate = useNavigate();
    const handleNavigateDetails = (id: string) => {
        navigate(`/products/${id}`);
    };

    return (
        <div data-aos="fade-up" data-aos-delay={delay}>
            <div className="rounded">
                <div className="m-6">
                    <img src={coverImage} alt={name} className="rounded h-[250px] w-full object-cover" />
                </div>
                <div className="m-6">
                    <p className="text-base mb-2 flex items-center gap-2">
                        {tag} <TagIcon className="size-4 text-[#007F6D]" />
                    </p>
                    <p className="text-xl mb-4">{name}</p>
                    <p className="text-2xl font-semibold mb-4">${price}</p>
                    <button
                        onClick={() => handleNavigateDetails(_id)}
                        className="transition-colors duration-300 bg-[#007F6D] rounded py-2 px-5 lg:py-3 md:px-5 text-xl text-[#D9F2EF]"
                    >
                        shop now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
