import { Link } from "react-router-dom";
import formLogin from "./login.module.css";
import { useState } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  // const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se os campos estão preenchidos
    if (usuario === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Faz a chamada para o backend
    const resposta = await fetch(
      "http://localhost:82/andrew/outros/relatorio/backend/login.php"
    )
      .then((resposta) => resposta.json())
      .then((dados) => console.log(dados))
      .catch((erro) => console.error("Erro:", erro));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (usuario === "" || usuario === undefined) {
      alert("Insira o usuário");
    } else {
      console.log(`Usuário: ${usuario}`);
    }

    if (senha === "" || senha === undefined) {
      alert("Insira a senha");
    } else {
      console.log(`Senha: ${senha}`);
    }

    setUsuario("");
    setSenha("");
  };

  return (
    <form onSubmit={handleSubmit} className={formLogin.login}>
      <label>
        <span>USUÁRIO</span>
        <input
          type="text"
          placeholder="Insira o nome de usuário..."
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </label>
      <label>
        <span>SENHA</span>
        <input
          type="password"
          placeholder="Insira a senha..."
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </label>
      <Link to={"/"}>
        <button onClick={handleClick}>ENTRAR</button>
      </Link>
    </form>
  );
};

export default Login;
