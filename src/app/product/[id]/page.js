import BreadCrumb from "@/components/BreadCrumb";
import ProductSidebar from "./ProductSidebar";
import ProductInfo from "./ProductInfo";
import RelatadeProducts from "./RelatadeProducts";

const fetchProductById = async (id) => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch product");
    console.log(res);

    return await res.json();
  } catch (err) {
    console.error("Product error:", err);
    return null;
  }
};

const page = async ({ params }) => {
  const { id } = await params;
  const product = await fetchProductById(id);

  return (
    <div className="product container m-t-30">
      <BreadCrumb page="Product" />
      <div className="row">
        <div className="col-xxl-12">
          <div className="mn-single-product">
            <div className="row">
              <div className="mn-pro-rightside mn-common-rightside col-lg-9 col-md-12 m-b-15">
                <ProductInfo product={product} />
                <RelatadeProducts category={product?.category} />
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
