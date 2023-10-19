import { useState } from 'react'

const Form = (props) => {
  const [nombre, setNombre] = useState('')
  const [numero, setNumero] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (nombre.trim() === '') {
      setMensajeError('Por favor ingrese un nombre')
    } else if (numero <= 0 || isNaN(numero)) {
      setMensajeError('Ingrese un numero mahyor a 0')
    } else {
      props.onSubmit({ nombre, numero })
      setNombre('')
      setNumero('')
      setMensajeError('')
    }
  }

  return (
    <div>
      <h3>Formulario</h3>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type='text'
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <br />
        <label>
          Número:
          <input
            type='number'
            value={numero}
            onChange={(event) => setNumero(event.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
      {mensajeError && <p>{mensajeError}</p>}
    </div>
  )
}

export default Form