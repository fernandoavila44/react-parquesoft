
import Lista from "../practicaComponents/Lista"
import Titulo from "../practicaComponents/Titulo"
import Tarjeta from "../practicaComponents/Tarjeta"

const Components = () => {
  return (
    <div className='flex-column'>
      <Titulo titulo='Star Wars'/>
      <Lista>
        <li>Episodio VI: Retorno del Jedi</li>
        <li>Serie: Andor</li>
        <li>Episodio IV: Una nueva esperanza</li>
      </Lista>
      <Titulo titulo='Personajes' />
      <Lista>
        <li>Han Solo</li>
        <li>Luke Skywalker</li>
        <li>Leia Organa</li>
        <li>Obi Wan Kenobi</li>
        <li>Darth Vader</li>
        <li>Cassian Andor</li>
      </Lista>
      <Tarjeta>Tarjetas</Tarjeta>
      <Tarjeta titulo='titulo'>Tarjeta children</Tarjeta>
      <Tarjeta footer='footer'>Tarjeta children</Tarjeta>
      <Tarjeta titulo='titulo' footer='footer'> Tarjeta children</Tarjeta>
    </div>
  )
}

export default Components
