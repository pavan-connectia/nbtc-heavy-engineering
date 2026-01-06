import React, { useEffect } from "react";
import { Navbar, Footer } from "..";

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-textGray">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
