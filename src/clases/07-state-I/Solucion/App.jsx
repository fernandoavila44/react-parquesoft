import { useState } from 'react'
import Calculadora from './Calculadora';

const App = () => {
  const [sum, setSum] = useState(0);


const sumarCalcula = (valor) => {
  setSum((prevSum) => prevSum + valor)
  };

  return (
    <div>
      <Calculadora amount={1} onEqual={sumarCalcula} />
      <Calculadora amount={5} onEqual={sumarCalcula} />
      <Calculadora amount={13} onEqual={sumarCalcula} />
      <h2>Suma total: {sum}</h2>
    </div>
  );
};

export default App