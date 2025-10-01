import { useState } from "react";

const Calculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const handleSomar = () => {
    alert(Number(a) + Number(b));
  };

    const handleSubtrair = () => {
    alert(Number(a) - Number(b));
  };

    const handleMultiplicar = () => {
    alert(Number(a) * Number(b));
  };

    const handleDividir = () => {
    alert(Number(a) / Number(b));
  };

  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Digite o primeiro número"
      />

      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Digite o segundo número"
      />

      <button onClick={handleSomar}>Somar</button>
	  <button onClick={handleSubtrair}>Subtrair</button>
	  <button onClick={handleMultiplicar}>Multiplicar</button>
	  <button onClick={handleDividir}>Dividir</button>
    </div>
  );
};

export default Calculator;
