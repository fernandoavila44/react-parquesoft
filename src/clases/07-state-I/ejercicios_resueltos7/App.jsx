import { useState } from 'react'
import Calculadora from './Calculadora';

const App = () => {
  const [sum, setSum] = useState(0);

// Función para manejar la suma total en la App
const sumarCalculadora = (valor) => {
  setSum((prevSum) => prevSum + valor)
  };

  return (
    <div>
      <Calculadora amount={1} onEqual={sumarCalculadora} />
      <Calculadora amount={5} onEqual={sumarCalculadora} />
      <Calculadora amount={13} onEqual={sumarCalculadora} />
      <h2>Suma total: {sum}</h2>
    </div>
  );
};

export default App
