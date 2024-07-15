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
import { PlusIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import { useState } from "react";
import { TProduct } from "@/types";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCreateProductMutation } from "@/redux/features/products/productsApi";

const AddProductModal = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TProduct>();

    const [addProduct] = useCreateProductMutation();

    const [open, setOpen] = useState(false);

    const onSubmit = async (data: TProduct) => {
        // converting price and stock to number
        data.price = parseFloat(data.price.toString());
        data.ratings = parseFloat(data.ratings.toString());
        data.stock = parseInt(data.stock.toString(), 10);

        // exclude empty string from images array
        data.images = data.images.filter((img) => img.trim() !== "");
        
        try {
            const res = await addProduct({ data }).unwrap();
            if (res?.success) {
                toast.success(res?.message);
                setOpen(false);
                reset();
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#007F6D] font-semibold hover:bg-[#006557] py-3 text-sm text-[#D9F2EF]">
                    <PlusIcon className="mr-2 h-4 w-4 text-white" /> Add Product
                </Button>
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
                                        type="text"
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
                                    {...register("category")}
                                    className={`p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                >
                                    <option value="Tents and Shelters">
                                        Tents and Shelters
                                    </option>
                                    <option value="Cooking and Dining">
                                        Cooking and Dining
                                    </option>
                                    <option value="Sleeping Gear">
                                        Sleeping Gear
                                    </option>
                                    <option value="Hiking and Trekking">
                                        Hiking and Trekking
                                    </option>
                                    <option value="Accessories and Gadgets">
                                        Accessories and Gadgets
                                    </option>
                                    <option value="Clothing and Apparel">
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
                                <Label htmlFor="category">Tag</Label>
                                <select
                                    id="tag"
                                    {...register("tag")}
                                    className={`p-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500`}
                                >
                                    <option value="new">New</option>
                                    <option value="recommended">
                                        Recommended
                                    </option>
                                    <option value="best selling">
                                        Best Selling
                                    </option>
                                    <option value="popular">Popular</option>
                                </select>
                            </div>
                        </div>

                        {/* Ratings */}
                        <div className="grid gap-2">
                            <Label htmlFor="ratings">Ratings</Label>
                            <div className="relative">
                                <Input
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

export default AddProductModal;
