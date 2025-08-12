import { HiAcademicCap } from "react-icons/hi2";

function Javascript() {
  const name = 'JPGFS';
  let nome = 'JPGFS';

  const soma = (a, b) => a + b;

  return (
    <div>
      <h1>{name}</h1>
      <h1><HiAcademicCap />{nome}</h1>
      <h1>A soma é: {2 + 2}</h1>
      <h1>A soma é: {soma(1000, 1000)}</h1>
    </div>
  )
}
export default Javascript;