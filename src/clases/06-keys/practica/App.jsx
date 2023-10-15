import productos from '@/fakeApi/products.json'
import cuentas from '@/fakeApi/accounts.json'
import usuarios from '@/fakeApi/users.json'
import ProductCard from '../practicaKeys/ProductCard'

const App = () => {
  function agregar(id) {
    console.log(`Agregado al carrito el producto con id ${id}`)
  }

  return (
    <div>
      <div >
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            item={producto}
            agregarAlCarrito={agregar}
          />
        ))}
      </div>
      <hr />
      <div >
        {cuentas.map((cuenta) =>(
          <div  key={cuenta.account}>
            <a
             href={`https://twitter.com/ ${cuenta.account}`}>
              {cuenta.account}
            </a>
          </div>

        ))}
      </div>
      <hr />
      <div>
        {usuarios.map((usuario)=>(
          <div key={usuario.apodo}>
            <h1>{usuario.apodo} </h1>
            <ul>
              {usuario.mascotas.map((mascota)=>(
                <li key={mascota.nombre}>
                  {mascota.nombre} ({mascota.edad}) : {mascota.color}

                </li>

              ))}
            </ul>

          </div>


        ))}
      </div>
    </div>
  )
}

export default App
