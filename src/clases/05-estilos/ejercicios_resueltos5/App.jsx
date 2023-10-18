import Item from './Components/Item'
import List from './Components/List'

const Components = () => {
  return (
    <>
      <ul>
        <li>Juramentada</li>
        <li>Palabras radiantes</li>
        <li>El aliento de los dioses</li>
        <li>El héroe de las eras</li>
        <li>El pozo de la ascensión</li>
        <li>El imperio final</li>
        <li>El camino de los reyes</li>
        <li>Elantris</li>
      </ul>
      <hr />
      <List>
        <Item>Juramentada</Item>
        <Item>Palabras radiantes</Item>
        <Item>El aliento de los dioses</Item>
        <Item>El héroe de las eras</Item>
        <Item>El pozo de la ascensión</Item>
        <Item>El imperio final</Item>
        <Item>El camino de los reyes</Item>
        <Item>Elantris</Item>
      </List>
      <hr />
      <div className='compact-theme'>
        <List>
          <Item>Elantris</Item>
          <Item>El camino de los reyes</Item>
          <Item>El imperio final</Item>
          <Item>El pozo de la ascensión</Item>
          <Item>El héroe de las eras</Item>
          <Item>El aliento de los dioses</Item>
          <Item>Palabras radiantes</Item>
          <Item>Juramentada</Item>
        </List>
      </div>
    </>
  )
}

export default Components
