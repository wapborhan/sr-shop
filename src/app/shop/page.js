import BreadCrumb from "@/components/BreadCrumb";
import Banner from "./banner/Banner";
import ShopRightSide from "./shop-right/ShopRightSide";
import ShopLeftSide from "./shop-left/ShopLeftSide";

const Shop = () => {
  return (
    <div className="shop container m-t-30">
      <BreadCrumb page="Shop" link="shop" />
      <div className="row">
        <div className="col-xxl-12">
          <section className="mn-shop padding-tb-30">
            <Banner />

            <div className="row">
              <ShopLeftSide />
              <ShopRightSide />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shop;
