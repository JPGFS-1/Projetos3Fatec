import "./App.css";
import Cliente from "./components/Cliente";
import ListCliente from "./components/ListCliente";
import NewCliente from "./components/NewCliente";

function App() {
  return (
    <>
      <h1>Cadastro de Clientes</h1>
      <NewCliente />
      <h1>Lista de Clientes</h1>
      <ListCliente />
    </>
  );
}

export default App;
