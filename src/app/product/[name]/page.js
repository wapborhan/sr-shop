import BreadCrumb from "@/components/BreadCrumb";
import ProductSidebar from "./ProductSidebar";
import ProductInfo from "./ProductInfo";
import RelatadeProducts from "./RelatadeProducts";

const page = () => {
  return (
    <div className="product container m-t-30">
      <BreadCrumb page="Product" />
      <div className="row">
        <div className="col-xxl-12">
          <div className="mn-single-product">
            <div className="row">
              <div className="mn-pro-rightside mn-common-rightside col-lg-9 col-md-12 m-b-15">
                <ProductInfo />
                <RelatadeProducts />
              </div>
              <ProductSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
