import { Routes, Route } from "react-router-dom";
import ProdutosPage from "./produtos/ProdutosPage";
import LocalizacoesPage from "./LocalizacoesPage";
import CategoriasPage from "./CategoriasPage";
import HomePage from "./HomePage";
import UsuariosPage from "./UsuariosPage";
import CadastrarProdutos from "./produtos/CadastrarProdutos";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/produtos" element={<ProdutosPage />}></Route>
      <Route path="/cadastrar-produtos" element={<CadastrarProdutos />}></Route>
      <Route
        path="/editar-produtos/:id"
        element={<CadastrarProdutos />}
      ></Route>
      <Route path="/categorias" element={<CategoriasPage />}></Route>
      <Route path="/localizacoes" element={<LocalizacoesPage />}></Route>
      <Route path="/usuarios" element={<UsuariosPage />}></Route>
    </Routes>
  );
}
