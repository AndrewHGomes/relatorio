import { Link } from "react-router-dom";
import formLogin from "./login.module.css";
import { useState } from "react";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "localhost:82/andrew/outros/relatorio/backend/login.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          usuario: usuario,
          senha: senha,
        }),
      }
    );
    console.log(response);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "127.0.0.1:82/andrew/outros/relatorio/backend/login.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          usuario: usuario,
          senha: senha,
        }),
      }
    );
    console.log(response);

    setUsuario("");
    setSenha("");
  };

  return (
    <form onSubmit={handleSubmit} className={formLogin.login}>
      <label>
        <span>Usuário</span>
        <input
          type="text"
          placeholder="Insira o nome de usuário..."
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </label>
      <label>
        <span>Senha</span>
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
