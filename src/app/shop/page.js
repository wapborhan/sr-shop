import { use } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Banner from "./banner/Banner";
import ShopRightSide from "./shop-right/ShopRightSide";
import ShopLeftSide from "./shop-left/ShopLeftSide";
import { fetchUser } from "@/lib/fetchUser";

const Shop = () => {
  const product = use(fetchUser());

  return (
    <div className="shop container m-t-30">
      <BreadCrumb page="Shop" link="shop" />
      <div className="row">
        <div className="col-xxl-12">
          <section className="mn-shop padding-tb-30">
            <Banner />
            <div className="row">
              <ShopLeftSide />
              <ShopRightSide product={product?.products} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Shop;
