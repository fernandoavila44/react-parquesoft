import { useEffect } from "react"

function TestComponent() {

  useEffect(() => {
    console.log("Activo")

    return () => {
      console.log("Desactivo")
    }
  }, [])

  return (
    <div>
      Activo
    </div>
  )
}

export default TestComponent