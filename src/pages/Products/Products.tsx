import { Input } from "@/components/ui/input";
import ProductCart from "@/components/ui/ProductCart";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const products = [
    {
        name: "Camping Tent",
        price: 69.99,
        category: "Camping Gear",
        image: "https://plus.unsplash.com/premium_photo-1663045950876-51a31ccce956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fENhbXBpbmclMjBUZW50JTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        name: "Sleeping Bag",
        price: 49.99,
        category: "Sleeping Bags",
        image: "https://images.unsplash.com/photo-1627907229506-d9a90984a269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2xlZXBpbmclMjBiYWd8ZW58MHwwfDB8fHww",
    },
    {
        name: "Camping Stove",
        price: 79.99,
        category: "Cooking Equipment",
        image: "https://images.unsplash.com/photo-1664429764866-227d36d8c1a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fENhbXBpbmclMjBTdG92ZXxlbnwwfDB8MHx8fDA%3D",
    },
];

const Products = () => {
    return (
        <div className="my-8 md:my-12">
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl text-center">
                    Products
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center my-8 md:my-12">
                    <div className="">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort Products" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Customize</SelectLabel>
                                    <SelectItem value="0">All</SelectItem>
                                    <SelectItem value="1">
                                        Price low to high
                                    </SelectItem>
                                    <SelectItem value="-1">
                                        Price high to low
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="col-span-2 w-6/12">
                        <Input
                            className="w-full rounded col-span-2"
                            type="text"
                            placeholder="Search your desired products"
                        />
                    </div>
                    <div className="">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Sort Products" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Customize</SelectLabel>
                                    <SelectItem value="0">All</SelectItem>
                                    <SelectItem value="1">
                                        Price low to high
                                    </SelectItem>
                                    <SelectItem value="-1">
                                        Price high to low
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="my-8 md:my-12 grid grid-cols-1 md:grid-cols-3 lg:gap-6">
                    {products.map((item, idx) => {
                        return (
                            <ProductCart
                                key={idx}
                                {...item}
                                delay={idx * 300}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Products;
