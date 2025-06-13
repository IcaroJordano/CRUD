import { useState } from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

const SidebarDropdown = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <ul className="slow-transition icon-link-hover nav-link dro fs-6 text-white">
      <span
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
        {children && (
          <i
            style={{ fontSize: "9px" }}
            className="ms-2  bi-caret-down-fill  "
          ></i>
        )}
      </span>
      {isOpen && <div className="slow-transition p-2">{children}</div>}
    </ul>
  );
};

export default SidebarDropdown;
