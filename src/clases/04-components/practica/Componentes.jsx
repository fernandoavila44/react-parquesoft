import Card from './Components/Card'
import Title from './Components/Title'
import List from './Components/List'
import './styles.css'

const CardComponents = () => {
  return (
    <div className='flex-column'>
      <Title title='Generos' />
      <List>
        <li>Accion</li>
        <li>Romance</li>
        <li>drama</li>
      </List>
      <Title title='Actores' />
      <List>
        <li>Leonardo DiCaprio</li>
        <li>Brad Pitt</li>
        <li>Tom Cruise</li>
        <li>Will Smith</li>
        <li>Julia Roberts</li>
        <li>Angelina Jolie</li>
        <li>Meryl Streep</li>
        <li>Scarlett Johansson</li>
      </List>
      <Card>Tarjeta hijo</Card>
      <Card title='card title'>Tarjeta hijo</Card>
      <Card footer='card footer'>Tarjeta hijo</Card>
      <Card title='card title' footer='card footer'>
        Tarjeta hijo
      </Card>
    </div>
  )
}

export default CardComponents