import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CadastrarProdutos = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [titulo, setTitulo] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imagem, setImagem] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const CadastrarProduto = async () => {
    setIsLoading(true);
    try {
      // 1. Autenticação
      const login = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: "john@mail.com",
          password: "changeme",
        }
      );

      const token = login.data.access_token;
      console.log("🔐 Token recebido:", token);

      // 2. Criar produto (POST autenticado)
      const novoProduto = {
        title: titulo ? titulo : "produto",
        price: Number(price) / 100,
        description: descricao || " ",
        categoryId: 1, // categoria existente na API
        images: [imagem || "https://placehold.co/600x400/EEE/31343C"],
      };

      const resposta = await axios.post(
        "https://api.escuelajs.co/api/v1/products",
        novoProduto,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ Produto criado com sucesso!");
      console.log(resposta.data);
      Swal.fire({
        icon: "success",
        // title: "Produto Cadastrado Com Sucesso!",
        text: "Produto Cadastrado Com Sucesso!",
        timer: 2500,
        timerProgressBar: true,
        showCancelButton: false,
        buttonsStyling: false,
        confirmButtonText: "",
      }).then(() => {
        navigate("/produtos");
      });
    } catch (erro: any) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: erro.message,
        timer: 2500,
        timerProgressBar: true,
        showCancelButton: false,
        buttonsStyling: false,
        confirmButtonText: "",
      });

      console.error("❌ Erro no processo:");
      console.error(erro.response?.data || erro.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (value: any) => {
    const number = Number(value) / 100;
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const EditarProduto = async () => {
    try {
      // 1. Autenticação
      const login = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: "john@mail.com",
          password: "changeme",
        }
      );

      const token = login.data.access_token;
      console.log("🔐 Token recebido:", token);

      // 2. Criar produto (POST autenticado)
      const novoProduto = {
        title: titulo ? titulo : "produto",
        price: Number(price) / 100,
        description: descricao,
        categoryId: 1, // categoria existente na API
        images: [imagem || "https://placehold.co/600x400/EEE/31343C"],
      };

      const resposta = await axios.put(
        `https://api.escuelajs.co/api/v1/products/${id}`,
        novoProduto,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("✅ Produto criado com sucesso!");
      console.log(resposta.data);
      navigate("/produtos");
    } catch (erro: any) {
      console.error("❌ Erro no processo:");
      console.error(erro.response?.data || erro.message);
    }
  };

  const getProdutoById = async () => {
    try {
      const response = await axios(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setTitulo(response.data.title);
      const preco = Number(response.data.price) * 100;
      setPrice(preco.toString());
      setImagem(response.data.images[0]);
      setDescricao(response.data.description);
    } catch (erro: any) {
      console.log(erro);
    }
  };

  useEffect(() => {
    getProdutoById();
  }, [id]);

  return (
    <section className="p-4">
      <h2 className="fs-4  fw-semibold opacity-75">
        {" "}
        {id ? "Editar" : "Cadastrar"} Produtos
      </h2>
      <hr className="border-top mb-4 border-dark border-1 opacity-50 my-2" />
      <form
        onSubmit={() => {
          id ? EditarProduto() : CadastrarProduto();
        }}
        action=""
      >
        <Row>
          <Col>
            <label className="form-label" htmlFor="">
              Titulo:
            </label>
            <input
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Titulo"
            />
          </Col>
          <Col>
            <label className="form-label" htmlFor="">
              Preço:
            </label>
            <input
              value={formatPrice(price)}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setPrice(value);
              }}
              className="form-control"
              type="text"
              placeholder="Preço"
            />
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <label className="form-label" htmlFor="">
              Categoria:
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="Categoria"
            />
          </Col>
          <Col>
            <label className="form-label" htmlFor="">
              Imagem (url):
            </label>
            <input
              value={imagem}
              onChange={(e) => {
                setImagem(e.target.value);
              }}
              className="form-control"
              type="text"
              placeholder="Imagem (url)"
            />
          </Col>
        </Row>
        <Row className="my-4">
          <Col>
            <label htmlFor="">Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => {
                setDescricao(e.target.value);
              }}
              className="form-control"
              placeholder="Descrição"
              name=""
              id=""
            ></textarea>
          </Col>
        </Row>
        <div className="d-flex  justify-content-end pe-3 gap-3">
          {/* <Link className="btn btn-danger px-3" to={"/produtos"}>
              Voltar
            </Link> */}
          <Button
            onClick={() => {
              navigate("/produtos");
            }}
            className="px-5"
            variant="danger"
          >
            Voltar
          </Button>
          <Button className="px-5" variant="success" type="submit">
            {isLoading ? <Spinner size="sm" /> : id ? "Editar" : "Cadastrar"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CadastrarProdutos;
