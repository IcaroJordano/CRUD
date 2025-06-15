import Sidebar from "./Sidebar";
import logo from "../../public/logo.png";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const MenuMobile = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      style={{
        width: isOpen ? "100%" : "0% ",
        marginTop: "50px",
        paddingTop: "50px",
        zIndex: "50",
      }}
      className={`slow-transition min-vh-100   z-1 m-0 d-lg-block position-fixed  d-lg-none  bg-dark text-white`}
    >
      <div
        className={`${
          isOpen ? "p-4" : "p-0 py-4 "
        } offcanvas-header    position-relative`}
        style={{ overflow: "visible" }}
      >
        <img
          style={{
            width: "95%",
            height: "84px",
          }}
          className={`object-fit-cover ${isOpen ? "" : "mt-2 ms-2"} `}
          src={logo}
          alt=""
        />
        <i
          style={{ top: "36px" }}
          className={`p-1 bg-white text-black rounded-2 px-2 text-center bi ${
            isOpen ? "bi-arrow-left" : "bi-arrow-right"
          } position-absolute  start-100 translate-middle-x  `}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></i>
      </div>
      <div className="offcanvas-body pt-5 ">
        <ul
          className={`nav flex-column d-flex flex-column gap-2 overflow-hidden ${
            isOpen ? "" : "align-items-center"
          }`}
        >
          <Sidebar isOpen={isOpen}></Sidebar>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
