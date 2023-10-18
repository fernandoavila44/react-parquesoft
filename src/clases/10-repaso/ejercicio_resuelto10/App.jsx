import { useState } from 'react'
import { Menu } from './Componentes/Menu'
import { Pedido } from './Componentes/Pedido'
import { getId } from './utils/getId'

const App = () => {
  const [pedidos, setPedidos] = useState([])

  function agregarAlPedido(item) {
    const newPedido = {
      id: getId(),
      item,
    }
    // Agrega el nuevo pedido a la lista de pedidos
    setPedidos([...pedidos, newPedido])
  }
  
// Filtra los pedidos para eliminar el pedido con el ID correspondiente

  function eliminarPedido(id) {
    const nuevoPedido = pedidos.filter((pedido) => pedido.id !== id)
    setPedidos(nuevoPedido)
  }

  return (
    <div className='flex flex-column'>
      <Menu agregarAlPedido={agregarAlPedido} />
      <ul>
        {pedidos.map((elemPedido) => {
          return (
            <Pedido
              key={elemPedido.id}
              pedido={elemPedido.item}
              eliminarPedido={() => eliminarPedido(elemPedido.id)}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default App
