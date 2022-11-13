import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../Assets/CSS/MainLayout.css";


function MainLayout({ children }) {
  return (
    <>
      <div className="main-layout">
        <Header></Header>
        <Sidebar></Sidebar>
        <div className="main-content" 
          Style="
            width: 1570px;
            padding: 10px;
            height: 100vh;
            left: 350px;
            top: 80px;
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;"
          >
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
