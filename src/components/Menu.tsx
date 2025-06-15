import { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarDropdown from "./SidebarDropdown";
import logo from "../../public/logo.png";
import logoSimples from "../../public/logo-simples.png";
import Sidebar from "./Sidebar";
interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Menu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <div
        style={{ width: isOpen ? "15%" : "5% " }}
        className={`slow-transition min-vh-100 m-0 d-lg-block  d-none  bg-dark text-white`}
      >
        <div
          className={`${
            isOpen ? "p-4" : "p-0 py-4 "
          } offcanvas-header    position-relative`}
          style={{ overflow: "visible" }}
        >
          {/* <h5 className="offcanvas-title" id="sidebarLabel">
            Menu
          </h5> */}

          <img
            style={{
              width: isOpen ? "95%" : "55%",
              height: isOpen ? "56px" : "32px",
            }}
            className={`object-fit-cover ${isOpen ? "" : "mt-2 ms-2"} `}
            src={isOpen ? logo : logoSimples}
            alt=""
          />
          <i
            style={{ top: "36px", zIndex: "5" }}
            className={`p-1 bg-white text-black rounded-2 px-2 text-center bi ${
              isOpen ? "bi-arrow-left" : "bi-arrow-right"
            } position-absolute  start-100 translate-middle-x  `}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></i>
        </div>
        <div className="offcanvas-body pt-5">
          <ul
            className={`nav flex-column d-flex flex-column gap-2 overflow-hidden ${
              isOpen ? "" : "align-items-center"
            }`}
          >
            <Sidebar isOpen={isOpen}></Sidebar>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
