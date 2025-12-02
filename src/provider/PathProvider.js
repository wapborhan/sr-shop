"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import Footer from "@/app/(home)/footer/Footer";
import Header from "@/app/(home)/header/Header";

const PathProvider = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // When URL changes → show loader
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // Preloader duration

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  return (
    <>
      <Header />
      {loading && (
        <div id="mn-overlay">
          <div className="loader">
            <img src="/assets/img/logo/loader.png" alt="loader" />
            <span className="shape"></span>
          </div>
        </div>
      )}
      {children}
      <Footer />
    </>
  );
};

export default PathProvider;
