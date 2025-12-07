import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";

const ProductShortInfo = ({ product }) => {
  return (
    <>
      <div className="single-pro-img">
        <ProductImage productImage={product?.images} />
      </div>
      <div className="single-pro-desc m-t-991">
        <ProductDescription product={product} />
      </div>
    </>
  );
};

export default ProductShortInfo;
