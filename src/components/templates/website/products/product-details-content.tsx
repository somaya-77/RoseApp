import { ProductDetails } from "@/lib/types/product.type";
import ProductGallery from "./product.gallery";
import AddToCartButton from "./add-to-cart-btn";
import { Badge, Icon, Button } from "@/components";
import { useFormatter } from "next-intl";

export default function ProductDetailsContent({ product }: { product: ProductDetails | undefined }) {
    //Translation
    const format = useFormatter();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-12">
            {/* Product images */}
            <div className="">
                {product?.images && product?.imgCover && (
                    <ProductGallery
                        images={product.images}
                        imgCover={product.imgCover}
                        _id={product._id}
                    />
                )}
            </div>

            {/* Product info */}
            <div className=" flex flex-col gap-4 max-h-130.75">
            <div>
                    <h1 className="text-3xl font-semibold">
                    {product?.title} </h1>

                <div className="flex gap-2 border-b pb-4 border-zinc-100">
                    {product?.priceAfterDiscount ? (
                        <>
                            <span className="text-3xl font-bold line-through text-zinc-300">
                                {product?.price}
                            </span>
                            <span className="text-3xl font-semibold">
                                {format.number(product?.priceAfterDiscount, "currency")}
                            </span>
                        </>
                    ) : (
                        <span className="text-3xl font-semibold">
                            {format.number(product!.price, "currency")}
                        </span>
                    )}
                    <Badge
                        variant={product!.quantity > 0 ? "subtle" : "secondary"}
                        className="flex items-center gap-1 rounded-full ml-3"
                    >
                        <Icon name="Package" className="w-5 h-5" />
                        {product!.quantity > 0
                            ? `${product?.quantity} left in stock`
                            : "Out of stock"}
                    </Badge>
                </div>
            </div>

                <div className="flex gap-2 border-b border-zinc-100 mb-4 py-4">
                    <Icon name="Star" className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                    {product!.rateCount > 0 ? (
                        <span className="text-sm text-zinc-700">
                            Rating:{" "}
                            <span className="font-medium">
                                {product?.rateAvg.toFixed(1)}/5
                            </span>{" "}
                            <span className="font-medium text-blue-600">
                                ({product?.rateCount} ratings )
                            </span>
                        </span>
                    ) : (
                        <span className="text-sm text-zinc-400">No ratings yet</span>
                    )}
                </div>

                <p className="text-zinc-600 max-w-151.25 overflow-y-auto mb-4">
                    {product?.description}
                </p>

                <div className="flex gap-2.5 mt-auto">
                    <Button variant="ghost" className="bg-zinc-100 text-zinc-800">
                        <Icon name="HeartPlus" className="w-6 h-6" />
                    </Button>

                    <AddToCartButton product={product!} />
                </div>
            </div>
        </div>
    )
}