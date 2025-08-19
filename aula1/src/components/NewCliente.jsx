import classes from "./NewCliente.module.css";
import { useState } from "react";

export default function NewCliente() {
  const [nome, setNome] = useState("");

  function MostrarValor(event) {
    console.log(event.target.value);
    setNome(event.target.value);
  }

  return (
    <>
      <h2>Novo Cliente</h2>
      <form className={classes.form}>
        <p>
          <label>Adicionar Cliente</label>
          <input
            type="text"
            id="nome"
            placeholder="Nome"
            onChange={MostrarValor}
            required
          />
          <input type="number" id="idade" placeholder="Idade" required />
          <input type="email" id="email" placeholder="Email" required />
          <button type="submit">Adicionar</button>
        </p>
        <p>{nome}</p>
      </form>
    </>
  );
}
