import classes from './Cliente.module.css';

export default function Cliente({nome, idade, email}) {
  return (
    <>
      <h1>Componente Cliente</h1>
      <div className={classes.cliente}>
        <h3>Lista de Clientes</h3>
        <h3>{nome}</h3>
        <h3>{idade}</h3>
        <h3>{email}</h3>
      </div>
    </>
  );
}
