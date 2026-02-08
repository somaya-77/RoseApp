import { getAllCategoriesService } from "@/lib/_services/all-categories.service"


export default async function AllCategories() {
    const categories = await getAllCategoriesService();
    console.log("categories",)
    return (
        <div className="h-60">
            <h3 className="text-2xl font-semibold mb-4">All Categories</h3>
            <ul className="overflow-y-auto h-48">
                {categories?.map(category => (
                    <li key={category._id} className="border-b border-[#00000014] flex justify-between py-1">
                        <p>{category.name}</p>
                        <p className="bg-[#0000000D] text-sm font-medium px-1 rounded-md">{category.productsCount} {category.productsCount > 1 ? "Products" : "Product"}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}