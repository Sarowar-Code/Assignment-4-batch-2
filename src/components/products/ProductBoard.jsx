import CardList from "./CardList";
import ProductsAction from "./ProductsAction";
import ProductsHeader from "./ProductsHeader";

function ProductBoard() {
    return (
        <div>
            <div className="pt-16 sm:pt-24 lg:pt-40">
                <ProductsHeader />

                <ProductsAction />

                <div>
                    <CardList />
                </div>
            </div>
        </div>
    );
}

export default ProductBoard;
