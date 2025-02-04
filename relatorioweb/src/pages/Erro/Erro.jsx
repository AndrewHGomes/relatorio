import erro from "./erro.module.css";

const Erro = () => {
  return (
    <div className={erro.content}>
      <h1 className={erro.face}>:(</h1>
      <h1>Sinto muito!</h1>
      <h3>Esta página não foi encontrada...</h3>
      <h3>Verifique a URL.</h3>
    </div>
  );
};

export default Erro;
