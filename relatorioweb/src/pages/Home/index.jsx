import formRelatorio from "./relatorio.module.css";

const index = () => {
  return (
    <form className={formRelatorio.relatorio}>
      <div className={formRelatorio.headRelatorio}>
        <label>
          <input type="radio" name="margem-lucro" value="margem-lucro" />
          <span>Margem x Lucro</span>
        </label>
        <label>
          <input
            type="radio"
            name="periodo-sintetico"
            value="periodo-sintetico"
          />
          <span>Vendas no Período Sintético</span>
        </label>
        <label>
          <input
            type="radio"
            name="vendas-qtd-total"
            value="vendas-qtd-total"
          />
          <span>
            Vendas<small> (Qtd x Total)</small>
          </span>
        </label>
      </div>
      <div className={formRelatorio.bodyRelatorio}>
        <label>
          <span>Data Inicial</span>
          <input type="date" />
        </label>
        <label>
          <span>Data Final</span>
          <input type="date" />
        </label>
      </div>
      <button>GERAR RELATÓRIO</button>
    </form>
  );
};

export default index;
