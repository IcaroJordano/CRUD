import MenuMobile from "./MenuMobile";
interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const Navbar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <div
        className="d-flex  custom-relative-lg  text-body-secondary  z-3 justify-content-lg:between  gap-3   align-items-center p-3  shadow-sm   m-0 bg-light d-lg-flex fw-semibold "
        style={{ height: "50px" }}
      >
        <i
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="bi bi-list fs-1 d-lg-none"
        ></i>
        <p className=" fs-5   my-5">Bem vindo, usuario</p>
        <div className="my-3 ms-auto d-flex align-items-center gap-2 gap-lg-3  me-lg-2 ">
          <i className="bi bi-bell-fill "></i>
          <img
            className="border"
            style={{ width: "31px", height: "31px" }}
            src=""
            alt=""
          />
        </div>
      </div>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
export default Navbar;
