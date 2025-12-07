import ProductShortInfo from "./details/ProductShortInfo";
import ProductDetails from "./details/ProductDetails";
import ProductRevew from "./revew/ProductRevew";

const ProductInfo = ({ product }) => {
  console.log(product);

  return (
    <div className="single-pro-block">
      <div className="single-pro-inner">
        <div className="row">
          <ProductShortInfo product={product} />
          <ProductDetails description={product?.description} />
          <ProductRevew reviews={product?.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
