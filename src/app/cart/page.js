import BreadCrumb from "@/components/BreadCrumb";
import React, { use } from "react";
import Summary from "./Summary";
import CartProduct from "./CartProduct";
import { fetchUser } from "@/lib/fetchUser";

const page = () => {
  const product = use(fetchUser());
  return (
    <div className="container">
      <BreadCrumb page="Cart Page" />
      <section className="mn-cart-section p-b-15">
        <div className="row relative">
          <div className="mn-cart-leftside col-lg-8 col-md-12">
            {/* <!-- cart content Start --> */}
            <CartProduct products={product?.products} />
            {/* <!--cart content End --> */}
          </div>
          {/* <!-- Sidebar Area Start --> */}
          <Summary products={product?.products} />
        </div>
      </section>
    </div>
  );
};

export default page;
