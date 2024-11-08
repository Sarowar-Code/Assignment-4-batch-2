import { useEffect, useState } from "react";

const useFetchCart = (productcategory) => {
    const BASE_URL = "https://fakestoreapi.com/products";
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);
    // State to store unique categories

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                setLoading(true);
                const url = productcategory
                    ? `${BASE_URL}/category/${productcategory}`
                    : BASE_URL;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                setCartData(data);

                setError(false);
                const categoryResponse = await fetch(BASE_URL);
                if (!categoryResponse.ok) {
                    throw new Error(
                        `HTTP error! Status: ${categoryResponse.status}`
                    );
                }

                const allProducts = await categoryResponse.json();
                const uniqueCategories = [
                    ...new Set(allProducts.map((item) => item.category)),
                ];
                setCategories(uniqueCategories);
            } catch (error) {
                setError(true);
                setCartData([]);
                setCategories([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCartData();
    }, [productcategory]);

    return { cartData, loading, error, categories };
};

export { useFetchCart };
