import axios from "axios";

const autenticarEPostarProduto = async () => {
  try {
    // 1. Autenticação
    const login = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
      email: "john@mail.com",
      password: "changeme"
    });

    const token = login.data.access_token;
    console.log("🔐 Token recebido:", token);

    // 2. Criar produto (POST autenticado)
    const novoProduto = {
      title: "Camisa Tech",
      price: 199,
      description: "Camisa confortável para devs.",
      categoryId: 1, // categoria existente na API
      images: ["https://placeimg.com/640/480/any"]
    };

    const resposta = await axios.post(
      "https://api.escuelajs.co/api/v1/products",
      novoProduto,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    console.log("✅ Produto criado com sucesso!");
    console.log(resposta.data);

  } catch (erro) {
    console.error("❌ Erro no processo:");
    console.error(erro.response?.data || erro.message);
  }
};

autenticarEPostarProduto();
