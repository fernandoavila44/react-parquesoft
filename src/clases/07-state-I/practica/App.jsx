import { useState } from 'react'
import Calculadora from '../practicaUseState/Calculadora';

const App = () => {
  const [sum, setSum] = useState(0);

  const sumarCalculadora = (valor) => {
    setSum(sum + valor);
  };

  return (
    <div>
      <Calculadora cantidad={1} resultado={sumarCalculadora} />
      <Calculadora cantidad= {5}  resultado={sumarCalculadora} />
      < Calculadora cantidad= {13} resultado={sumarCalculadora} />
      <h1>Resultado: {sum} </h1>
    </div>
  )
}

export default App
