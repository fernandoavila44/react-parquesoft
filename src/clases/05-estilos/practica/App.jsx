import Item from '../practicaEstilos/Item'
import Lista from '../practicaEstilos/Lista'

const Components = () => {
  return (
    <>
      <ul>
        <li>Elantris</li>
        <li>El camino de los reyes</li>
        <li>El imperio final</li>
        <li>El pozo de la ascensión</li>
        <li>El héroe de las eras</li>
        <li>El aliento de los dioses</li>
        <li>Palabras radiantes</li>
        <li>Juramentada</li>
      </ul>
      <hr />
      <Lista>
        <Item>Elantris</Item>
        <Item>El camino de los reyes</Item>
        <Item>El imperio final</Item>
        <Item>El pozo de la ascensión</Item>
        <Item>El héroe de las eras</Item>
        <Item>El aliento de los dioses</Item>
        <Item>Palabras radiantes</Item>
        <Item>Juramentada</Item>
      </Lista>
      <hr />
      <div className='compact-theme'>
        <Lista>
          <Item>Elantris</Item>
          <Item>El camino de los reyes</Item>
          <Item>El imperio final</Item>
          <Item>El pozo de la ascensión</Item>
          <Item>El héroe de las eras</Item>
          <Item>El aliento de los dioses</Item>
          <Item>Palabras radiantes</Item>
          <Item>Juramentada</Item>
        </Lista>
      </div>
    </>
  )
}

export default Components
