import { useState } from "react";
import { useFetchCart } from "../../hooks/useCartData";
import AddToCart from "./AddToCart";
import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort";
function ProductsAction() {
    const [category, setCategory] = useState("");

    const { cartData, categories } = useFetchCart(category);

    console.log(cartData, "Action");

    return (
        <div className="mt-10">
            <div className="flex justify-between relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="w-full">
                    <Sort sortOptions={["Low to High", "High to Low"]} />

                    <Filter
                        filterCategories={categories}
                        onFilterChange={setCategory}
                    />
                </div>

                <div className="flex gap-2 items-center">
                    <Search />

                    <AddToCart />
                </div>
            </div>
        </div>
    );
}

export default ProductsAction;
