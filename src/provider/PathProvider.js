import Footer from "@/app/(home)/footer/Footer";
import Header from "@/app/(home)/header/Header";

const PathProvider = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PathProvider;
