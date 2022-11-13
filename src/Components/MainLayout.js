import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../Assets/CSS/MainLayout.css";

function MainLayout({ children }) {
  return (
    <>
      <div className="main-layout">
        <Header></Header>
        <div className="main-content">
          <Sidebar></Sidebar>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
