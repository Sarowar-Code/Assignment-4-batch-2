import { useFetchCart } from "../../hooks/useCartData";
import Card from "./Card";
import CardSkeleton from "./CardSkeleton";
function CardList() {
    const { cartData, loading, error } = useFetchCart();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {error && (
                        <div className="text-red-600 p-5 font-bold border border-red-800 bg-[#ffe6e6] rounded-xl">
                            <p>
                                <strong>Error:</strong> Unable to load cart
                                data. Please check your connection or try again
                                later.
                            </p>
                        </div>
                    )}
                    {cartData.map(({ id, title, image, category, price }) => (
                        <Card
                            key={id}
                            title={title}
                            category={category}
                            price={price}
                            image={image}
                        />
                    ))}

                    {loading && (
                        <>
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardList;
