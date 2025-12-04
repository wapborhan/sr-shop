import ProductShortInfo from "./details/ProductShortInfo";
import ProductDetails from "./details/ProductDetails";
import ProductRevew from "./revew/ProductRevew";

const ProductInfo = ({ product }) => {
  return (
    <div className="single-pro-block">
      <div className="single-pro-inner">
        <div className="row">
          <ProductShortInfo product={product} />
          <ProductDetails description={product?.description} />
          <ProductRevew product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
