import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { TProduct, TUpdateProductProps } from "@/types";
import { useUpdateProductMutation } from "@/redux/features/products/productsApi";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaEdit } from "react-icons/fa";

const UpdateProductModal = ({ product }: TUpdateProductProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TProduct>();

    const [updateProduct] = useUpdateProductMutation();

    const [open, setOpen] = useState(false);

    const onSubmit = async (data: TProduct) => {
        // converting price and stock to number
        data.price = parseFloat(data.price.toString());
        data.ratings = parseFloat(data.ratings.toString());
        data.stock = parseInt(data.stock.toString(), 10);

        // exclude empty string from images array
        data.images = data.images.filter((img) => img.trim() !== "");

        try {
            const res = await updateProduct({
                id: product?._id,
                data,
            }).unwrap();
            if (res?.success) {
                toast.success(res?.message);
                setOpen(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <FaEdit className="h-6 w-6 text-[#007F6D] hover:text-[#006557] cursor-pointer duration-300" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] md:max-w-[600px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                    <DialogDescription>
                        Fill in the details of the new product you want to add.
                        Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 py-4">
                        {/* product name */}
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                defaultValue={product?.name}
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                className={`p-2 border ${
                                    errors.name
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            />
                            {errors.name && (
                                <span className="text-red-500 text-xs">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        {/* product description */}
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                defaultValue={product?.description}
                                {...register("description", {
                                    required: "Description is required",
                                })}
                                className={`p-2 border ${
                                    errors.description
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            />
                            {errors.description && (
                                <span className="text-red-500 text-xs">
                                    {errors.description.message}
                                </span>
                            )}
                        </div>

                        {/* product price and category */}
                        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="price">Price</Label>
                                <div className="relative">
                                    <Input
                                        id="price"
                                        defaultValue={product?.price}
                                        type="number"
                                        {...register("price", {
                                            required: "Price is required",
                                        })}
                                        className={`p-2 border ${
                                            errors.price
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                    />
                                    {errors.price && (
                                        <span className="absolute right-0 text-xs text-red-500 mt-1">
                                            {errors.price.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="category">Category</Label>
                                <select
                                    id="category"
                                    defaultValue={product?.category}
                                    {...register("category")}
                                    className={`p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                >
                                    <option
                                        value="Tents and Shelters"
                                        selected={
                                            product?.category ===
                                            "Tents and Shelters"
                                        }
                                    >
                                        Tents and Shelters
                                    </option>
                                    <option
                                        value="Cooking and Dining"
                                        selected={
                                            product?.category ===
                                            "Cooking and Dining"
                                        }
                                    >
                                        Cooking and Dining
                                    </option>
                                    <option
                                        value="Sleeping Gear"
                                        selected={
                                            product?.category ===
                                            "Sleeping Gear"
                                        }
                                    >
                                        Sleeping Gear
                                    </option>
                                    <option
                                        value="Hiking and Trekking"
                                        selected={
                                            product?.category ===
                                            "Hiking and Trekking"
                                        }
                                    >
                                        Hiking and Trekking
                                    </option>
                                    <option
                                        value="Accessories and Gadgets"
                                        selected={
                                            product?.category ===
                                            "Accessories and Gadgets"
                                        }
                                    >
                                        Accessories and Gadgets
                                    </option>
                                    <option
                                        value="Clothing and Apparel"
                                        selected={
                                            product?.category ===
                                            "Clothing and Apparel"
                                        }
                                    >
                                        Clothing and Apparel
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* product stock and tag*/}
                        <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="stock">Stock</Label>
                                <div className="relative">
                                    <Input
                                        defaultValue={product?.stock}
                                        id="stock"
                                        type="number"
                                        {...register("stock", {
                                            required: "Stock is required",
                                        })}
                                        className={`p-2 border ${
                                            errors.price
                                                ? "border-red-500"
                                                : "border-gray-300"
                                        } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                    />
                                    {errors.stock && (
                                        <span className="absolute right-0 text-xs text-red-500 mt-1">
                                            {errors.stock.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="tag">Tag</Label>
                                <select
                                    defaultValue={product.tag}
                                    id="tag"
                                    {...register("tag")}
                                    className={`p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                >
                                    <option
                                        selected={product?.tag === "new"}
                                        value="new"
                                    >
                                        New
                                    </option>
                                    <option
                                        selected={
                                            product?.tag === "recommended"
                                        }
                                        value="recommended"
                                    >
                                        Recommended
                                    </option>
                                    <option
                                        selected={
                                            product?.tag === "best selling"
                                        }
                                        value="best selling"
                                    >
                                        Best Selling
                                    </option>
                                    <option
                                        selected={product?.tag === "popular"}
                                        value="popular"
                                    >
                                        Popular
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* Ratings */}
                        <div className="grid gap-2">
                            <Label htmlFor="ratings">Ratings</Label>
                            <div className="relative">
                                <Input
                                    defaultValue={product.ratings}
                                    id="ratings"
                                    type="number"
                                    step="0.01"
                                    {...register("ratings", {
                                        required: "Ratings is required",
                                        min: {
                                            value: 1,
                                            message:
                                                "ratings must be at least 1",
                                        },
                                        max: {
                                            value: 5,
                                            message: "ratings cannot exceed 5",
                                        },
                                    })}
                                    className={`p-2 border ${
                                        errors.ratings
                                            ? "border-red-500"
                                            : "border-gray-300"
                                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                />
                                {errors.ratings && (
                                    <span className="absolute right-0 text-xs text-red-500 mt-1">
                                        {errors.ratings.message}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* product images */}
                        <div className="grid gap-2">
                            <Label htmlFor="coverImage">Cover Image</Label>
                            <Input
                                id="coverImage"
                                defaultValue={product.coverImage}
                                {...register("coverImage", {
                                    required: "At least one image is required",
                                    pattern: {
                                        value: /^https?:\/\/.+/,
                                        message: "Please enter a valid URL",
                                    },
                                })}
                                className={`p-2 border ${
                                    errors.coverImage
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            />
                            {errors.coverImage && (
                                <span className="text-red-500 text-xs">
                                    {errors.coverImage.message}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="images1">Image 1</Label>
                            <Input
                                defaultValue={product?.images[0]}
                                id="images1"
                                {...register("images.0", {
                                    pattern: {
                                        value: /^https?:\/\/.+/,
                                        message: "Please enter a valid URL",
                                    },
                                })}
                                className={`p-2 border ${
                                    errors.images && errors.images[0]
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            />
                            {errors.images && errors.images[0] && (
                                <span className="text-red-500 text-xs">
                                    {errors.images[0].message}
                                </span>
                            )}
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="images2">Image 2</Label>
                            <Input
                                defaultValue={product?.images[1]}
                                id="images2"
                                {...register("images.1", {
                                    pattern: {
                                        value: /^https?:\/\/.+/,
                                        message: "Please enter a valid URL",
                                    },
                                })}
                                className={`p-2 border ${
                                    errors.images && errors.images[1]
                                        ? "border-red-500"
                                        : "border-gray-300"
                                } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                            />
                            {errors.images && errors.images[1] && (
                                <span className="text-red-500 text-xs">
                                    {errors.images[1].message}
                                </span>
                            )}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProductModal;
