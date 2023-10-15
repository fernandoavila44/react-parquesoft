function ProductCard({ item, agregarAlCarrito }) {

  function darClick() {
    agregarAlCarrito(item.id);
  }

  return (
    <div  key={item.id}>
      <h2>{item.nombre}</h2>
      <p>ID: {item.id}</p>
      <p>Precio: {item.precio}</p>
      <p>Descripción: {item.descripcion}</p>
      <button onClick={darClick}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;
