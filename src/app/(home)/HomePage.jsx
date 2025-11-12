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
      <Hero />
      <div class="mn-main-contents container">
        <Categories />
        <FlashSale />
        <Services />
        <Banner />
        <NewArrival />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
