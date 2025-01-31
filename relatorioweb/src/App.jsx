import Content from "./components/Content/";

const App = () => {
  const empresa = "D'affari Sistemas de Informação";
  return (
    <>
      <header>
        <h1>Meus Relatórios</h1>
      </header>

      <Content />

      <footer>
        <h5>{empresa}</h5>
      </footer>
    </>
  );
};

export default App;
