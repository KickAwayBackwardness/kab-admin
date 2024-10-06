import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NewPost from "../components/SubMenu/NewPost";
import LoginSignup from "../components/Modal/LoginSignup";
import ForceLogin from "../components/Modal/ForceLogin";
import Types from "../components/SubMenu/Types";

const AdminLayout = () => {
  const { pathname } = useLocation();
  const renderSubHeader = () => {
    // if (pathname.replaceAll("/", "") === "") {
    //   return <HomeSubHeader />;
    // }

    if (pathname === "/add-new-post") {
      return <NewPost />;
    }

    if (pathname === "/types") {
      return <Types />;
    }

    // if (pathname.includes("chi-tiet")) {
    //   return <DetailSubHeader />;
    // }
  };

  useEffect(() => {
    pathname.includes("admin") &&
      document.querySelector("html").classList.add("admin");
  });
  return (
    <main>
      <Header />
      <main className="mt-[50px] mb-[50px]">
        <Outlet />
      </main>
      <Footer />
      {renderSubHeader()}
      <ForceLogin />
      <LoginSignup />
    </main>
  );
};

export default AdminLayout;
