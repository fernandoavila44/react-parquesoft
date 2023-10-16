import { useState } from "react";

const Calculadora = ({ cantidad, resultado }) => {
    const [calculadora, setCalculadora] = useState(0)
  
    const aumentar = () => {
      setCalculadora(calculadora + cantidad)
    }
  
    const disminuir = () => {
      setCalculadora(calculadora - cantidad)
    }
  
    const limpiar = () => {
      setCalculadora(0)
    }
  
    const resultadoOperacion = () => {
      console.log(`El valor actual del calculadora es ${calculadora}`)
      resultado(calculadora)
    }
  
    return (
      <div>
        <h2>Calculadora: {calculadora}</h2>
        <button onClick={aumentar}>+</button>
        <button onClick={disminuir}>-</button>
        <button onClick={limpiar}>Limpiar</button>
        <button onClick={resultadoOperacion}>=</button>
      </div>
    )
  }
  export default Calculadora