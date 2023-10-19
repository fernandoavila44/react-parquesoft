import { useEffect, useState } from "react"

function pedido(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    console.log("Procesando pedido...");
    const timeout = setTimeout(() => {
      console.log("Pedido procesado");
      setIsConfirmed(true);
    }, 2000);

    return () => {
      console.log("Cancelando pedido...");
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {isConfirmed ? <h1>el pedido está listo</h1> : <h1>Procesando el pedido</h1>}
      <button onClick={props.onCancel}>Cancelar el pedido</button>
    </div>
  );
}

export default pedido