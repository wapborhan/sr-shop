import Banner from "./banner/Banner";
import Categories from "./categories/Categories";
import FlashSale from "./flash-sale/FlashSale";
import Hero from "./hero/Hero";
import NewArrival from "./new-arrival/NewArrival";
import Services from "./services/Services";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="mn-main-contents container">
        <Categories />
        <FlashSale />
        <Services />
        <Banner />
        <NewArrival />
      </div>
    </>
  );
};

export default HomePage;
