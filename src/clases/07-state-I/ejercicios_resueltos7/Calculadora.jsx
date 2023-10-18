import { useState } from 'react'

const Calculadora = ({ amount, onEqual }) => {
  const [calculadora, setCalculadora] = useState(0)

// Función para aumentar el valor de la calculadora

  const aumentarCalculadora = () => {
    setCalculadora(calculadora + amount)
  }

  const disminuirCalculadora = () => {
    setCalculadora(calculadora - amount)
  }

  // Función para disminuir el valor de la calculadora

  const resetearCalculadora = () => {
    setCalculadora(0)
  }

  // Función para resetear la calculadora a 0

  const igualarCalculadora = () => {
    console.log(`El valor de la calculadroa es ${calculadora}`)
    onEqual(calculadora)
  }

  return (
    <div>
      <h2>Calculadora: {calculadora}</h2>
      <button onClick={aumentarCalculadora}>+</button>
      <button onClick={disminuirCalculadora}>-</button>
      <button onClick={resetearCalculadora}>Reset</button>
      <button onClick={igualarCalculadora}>=</button>
    </div>
  )
}

export default Calculadora
