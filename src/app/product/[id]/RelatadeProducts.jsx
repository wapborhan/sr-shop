import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/fetchProducts";

const RelatadeProducts = async ({ category }) => {
  const productData = await getProductsByCategory(category);

  return (
    <section className="mn-related-product m-t-30">
      <div className="mn-title">
        <h2>
          Related <span>Products</span>
        </h2>
      </div>
      <div className="mn-related row">
        {productData?.products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            listView={false}
            productData={product}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatadeProducts;
