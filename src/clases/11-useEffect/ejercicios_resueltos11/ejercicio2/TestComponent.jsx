import { useEffect } from "react"

function TestComponent() {

  useEffect(() => {
    console.log("Activo")
    
// Función de limpieza que se ejecuta al desmontar el componente

    return () => {
      console.log("Desactivo")
    }
  }, [])

  return (
    <div>
      Akistoi
    </div>
  )
}

export default TestComponent
