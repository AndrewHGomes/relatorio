import formLogin from "./login.module.css";

const index = () => {
  return (
    <form className={formLogin.login}>
      <label>
        <span>Usuário</span>
        <input type="text" placeholder="Insira o nome de usuário..." />
      </label>
      <label>
        <span>Senha</span>
        <input type="password" placeholder="Insira a senha..." />
      </label>
      <button>ENTRAR</button>
    </form>
  );
};

export default index;
