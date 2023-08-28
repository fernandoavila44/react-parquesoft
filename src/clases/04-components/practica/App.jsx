import Tarjeta from './Components/Tarjeta'
import Titulo from './Components/Titulo'
import Lista from './Components/Lista'
import './styles.css'

const Components = () => {
  return (
    <div className='flex-column'>
      <Titulo title='Generos' />
      <Lista>
        <li>Accion</li>
        <li>Romance</li>
        <li>drama</li>
      </Lista>
      <Titulo title='Actores' />
      <Lista>
        <li>Leonardo DiCaprio</li>
        <li>Brad Pitt</li>
        <li>Tom Cruise</li>
        <li>Will Smith</li>
        <li>Julia Roberts</li>
        <li>Angelina Jolie</li>
        <li>Meryl Streep</li>
        <li>Scarlett Johansson</li>
      </Lista>
      <Tarjeta>card children</Tarjeta>
      <Tarjeta title='tarjeta title'>tarjeta niño</Tarjeta>
      <Tarjeta footer='tarjeta footer'>tarjeta niño</Tarjeta>
      <Tarjeta title='tarjeta title' footer='tarjeta footer'>
        card children
      </Tarjeta>
    </div>
  )
}

export default Components
