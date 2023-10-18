import { useState } from "react";

const Calculadora = ({ valor, resultado }) => {
    const [calculadora, setCalculadora] = useState(0)
  
    const aumentarCalcula = () => {
      setCalculadora(calculadora + valor)
    }
  
    const disminuiCalcular = () => {
      setCalculadora(calculadora - valor)
    }
  
    const limpiarCalcula = () => {
      setCalculadora(0)
    }
  
    const resultado = () => {
      console.log(`El valor calculado es ${calculadora}`)
      resultado(calculadora)
    }
  
    return (
      <div>
        <h2>Calculadora: {calculadora}</h2>
        <button onClick={aumentarCalcula}>+</button>
        <button onClick={disminuirCalcula}>-</button>
        <button onClick={limpiarCalcula}>Limpiar</button>
        <button onClick={resultado}>=</button>
      </div>
    )
  }
  export default Calculadora