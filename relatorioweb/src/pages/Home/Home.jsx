import { useState } from "react";
import formRelatorio from "./relatorio.module.css";

const Home = () => {
  const [tipoDeRelatorio, setTipoDeRelatorio] = useState();
  const [dataInicial, setDataInicial] = useState();
  const [dataFinal, setDataFinal] = useState();

  const handleClick = (e) => {
    e.preventDefault();

    if (tipoDeRelatorio == "" || tipoDeRelatorio == undefined) {
      alert("Escolha algum relatório...");
    } else {
      console.log(`Tipo de relatório: ${tipoDeRelatorio}`);
    }

    if (dataInicial == "" || dataInicial == undefined) {
      alert("Escolha uma data inicial...");
    } else {
      console.log(`Data inicial: ${dataInicial}`);
    }

    if (dataFinal == "" || dataFinal == undefined) {
      alert("Escolha uma data final...");
    } else {
      console.log(`Data final: ${dataFinal}`);
    }
  };

  return (
    <form className={formRelatorio.relatorio}>
      <div className={formRelatorio.headRelatorio}>
        <label>
          <input
            type="radio"
            checked={tipoDeRelatorio === "margem-lucro"}
            value="margem-lucro"
            onChange={(e) => setTipoDeRelatorio(e.target.value)}
          />
          <span>Margem x Lucro</span>
        </label>
        <label>
          <input
            type="radio"
            checked={tipoDeRelatorio === "periodo-sintetico"}
            value="periodo-sintetico"
            onChange={(e) => setTipoDeRelatorio(e.target.value)}
          />
          <span>Vendas no Período Sintético</span>
        </label>
        <label>
          <input
            type="radio"
            checked={tipoDeRelatorio === "qtd-total"}
            value="qtd-total"
            onChange={(e) => setTipoDeRelatorio(e.target.value)}
          />
          <span>
            Vendas<small> (Qtd x Total)</small>
          </span>
        </label>
      </div>
      <div className={formRelatorio.bodyRelatorio}>
        <label>
          <span>Data Inicial</span>
          <input type="date" onChange={(e) => setDataInicial(e.target.value)} />
        </label>
        <label>
          <span>Data Final</span>
          <input type="date" onChange={(e) => setDataFinal(e.target.value)} />
        </label>
      </div>
      <button onClick={handleClick}>GERAR RELATÓRIO</button>
    </form>
  );
};

export default Home;
