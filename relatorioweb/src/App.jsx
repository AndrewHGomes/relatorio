import Content from "./components/Content/Content.jsx";

const App = () => {
  const empresa = "D'affari Sistemas de Informação";
  return (
    <>
      <header>
        <h2>Meus Relatórios</h2>
      </header>

      <Content />

      <footer>
        <h5>{empresa}</h5>
      </footer>
    </>
  );
};

export default App;
