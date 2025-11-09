import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import FlashSale from "./flash-sale/FlashSale";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import NewArrival from "./new-arrival/NewArrival";
import Services from "./services/Services";

const HomePage = () => {
  return (
    <>
      <Header />
      <div class="mn-main-content">
        <div className="row">
          <div className="col-xxl-12">
            {/* <Hero /> */}
            <Categories />
            <FlashSale />
            <Services />
            <Banner />
            <NewArrival />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
