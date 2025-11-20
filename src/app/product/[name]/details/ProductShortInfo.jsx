import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";

const ProductShortInfo = () => {
  return (
    <>
      <div className="single-pro-img">
        <ProductImage />
      </div>
      <div className="single-pro-desc m-t-991">
        <ProductDescription />
      </div>
    </>
  );
};

export default ProductShortInfo;
