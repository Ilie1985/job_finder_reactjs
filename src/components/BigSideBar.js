import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import { useSelector } from "react-redux";

const BigSideBar = () => {
  const { isSidebarOpen } = useSelector((store) => {
    return store.user;
  });
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen
            ? "sidebar-container"
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
