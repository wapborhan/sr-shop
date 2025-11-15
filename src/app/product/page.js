import Link from "next/link";

const page = () => {
  return (
    <div className="container m-b-30 m-t-30">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="m-b-20">We’re Sorry, an error has occurred</h2>
          <p className="m-b-20">You have not selected any products.</p>
          <Link href="/shop" className="mn-btn-2">
            <span>BACK TO SHOP PAGE</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
