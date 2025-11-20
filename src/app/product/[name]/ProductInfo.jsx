import ProductShortInfo from "./details/ProductShortInfo";
import ProductDetails from "./details/ProductDetails";
import ProductRevew from "./revew/ProductRevew";

const ProductInfo = () => {
  return (
    <div className="single-pro-block">
      <div className="single-pro-inner">
        <div className="row">
          <ProductShortInfo />
          <ProductDetails />
          <ProductRevew />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
