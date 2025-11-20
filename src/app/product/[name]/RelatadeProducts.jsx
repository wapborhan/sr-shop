import ProductCard from "@/components/ProductCard";

const RelatadeProducts = () => {
  const productData = { link: "/product/t-short", category: "T-shirt" };
  return (
    <section class="mn-related-product m-t-30">
      <div class="mn-title">
        <h2>
          Related <span>Products</span>
        </h2>
      </div>
      <div className="mn-related row">
        <ProductCard listView={false} productData={productData} />
        <ProductCard listView={false} productData={productData} />
        <ProductCard listView={false} productData={productData} />
        <ProductCard listView={false} productData={productData} />
      </div>
    </section>
  );
};

export default RelatadeProducts;
