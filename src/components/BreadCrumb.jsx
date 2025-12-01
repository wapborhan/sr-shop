import Link from "next/link";

const BreadCrumb = ({ page }) => {
  return (
    <div className="mn-breadcrumb m-b-30  p-t-15">
      <div className="row">
        <div className="col-12">
          <div className="row gi_breadcrumb_inner">
            <div className="col-md-6 col-sm-12">
              <h2 className="mn-breadcrumb-title">{page}</h2>
            </div>
            <div className="col-md-6 col-sm-12">
              <ul className="mn-breadcrumb-list">
                <li className="mn-breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="mn-breadcrumb-item active">{page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
