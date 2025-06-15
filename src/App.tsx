import { Col, Row } from "react-bootstrap";
import Menu from "./components/Menu";
import { Rotas } from "./pages/Rotas";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="d-flex" style={{ height: "100vh" }}>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />

        <Col
          className="overflow-auto"
          style={{
            padding: 0,
            margin: 0,
            height: "100vh",
          }}
        >
          {/* <div
          
            style={{ height: "50px" }}
            className=" d-lg-none d-sm-block m-0 bg-light-subtle    shadow-sm"
          >
            mobile
          </div>
          <div
            style={{ height: "50px" }}
            className=" m-0 bg-light d-none d-lg-flex border-lg-bottom border border-light"
          >
            desktop
          </div> */}
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="" style={{ marginTop: "50px" }}>
            <Rotas />
          </div>
        </Col>
      </div>
    </>
  );
}

export default App;
