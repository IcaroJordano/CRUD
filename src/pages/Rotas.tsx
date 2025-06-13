import { Routes, Route } from "react-router-dom";
import ProdutosPage from "./ProdutosPage";
import LocalizacoesPage from "./LocalizacoesPage";
import CategoriasPage from "./CategoriasPage";
import HomePage from "./HomePage";
import UsuariosPage from "./UsuariosPage";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/produtos" element={<ProdutosPage />}></Route>
      <Route path="/categorias" element={<CategoriasPage />}></Route>
      <Route path="/localizacoes" element={<LocalizacoesPage />}></Route>
      <Route path="/usuarios" element={<UsuariosPage />}></Route>
    </Routes>
  );
}
