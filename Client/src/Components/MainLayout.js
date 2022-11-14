import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../Assets/CSS/MainLayout.css";

function MainLayout({ children }) {
  return (
    <>
      <div className="main-layout">
        <Header></Header>
        <div className="sidebar-content" >
          <Sidebar></Sidebar>
          <div className="main-content" 
            Style="
              width: 100%;
              padding: 10px;
              height: 100vh;
              display: flex;
              flex-direction: column;
              "
            >
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
