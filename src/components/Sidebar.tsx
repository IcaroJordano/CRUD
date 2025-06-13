import SidebarItem from "./SidebarItem";

interface Props {
  isOpen?: boolean;
}

const Sidebar = ({ isOpen }: Props) => {
  return (
    <>
      <div className="border-bottom border-secondary mb-2">
        <SidebarItem
          to={"/"}
          title={isOpen ? "Inicio" : ""}
          icon={`bi-lightbulb-fill`}
        />
      </div>

      <SidebarItem
        to={"/produtos"}
        title={isOpen ? "Produtos" : ""}
        icon={`bi-box-seam`}
      />

      <SidebarItem
        to={"/categorias"}
        title={isOpen ? "Categorias" : ""}
        icon={`bi-tags`}
      />

      <SidebarItem
        to={"/localizacoes"}
        title={isOpen ? "Localizações" : ""}
        icon={`bi-geo-alt`}
      />

      <SidebarItem
        to={"/usuarios"}
        title={isOpen ? "Usuários" : ""}
        icon={`bi-people`}
      />
    </>
  );
};

export default Sidebar;
