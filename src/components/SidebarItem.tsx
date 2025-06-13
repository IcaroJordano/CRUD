import { Link } from "react-router-dom";

interface Props {
  title: string;
  to: string;
  icon?: string;
}

const SidebarItem = ({ title, to, icon }: Props) => {
  return (
    <li className="nav-item slow-transition link-underline-opacity-100-hover">
      <Link
        to={to}
        style={{ fontSize: "14px" }}
        className="nav-link  fw-bolder text-white d-flex slow-transition"
      >
        <i className={`bi ${icon} me-2`}></i>{" "}
        <span className="slow-transition text-truncate ">{title}</span>{" "}
      </Link>
    </li>
  );
};

export default SidebarItem;
