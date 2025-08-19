//import classes from './ListCliente.module.css';
import Cliente from "./Cliente";

export default function ListCliente() {
  return (
    <>
      <li>
        <Cliente nome="Genovaldo" idade={23} email="genovaldo@example.com" />
        <Cliente nome="Genovalda" idade={29} email="genovalda@example.com" />
      </li>
    </>
  );
}
