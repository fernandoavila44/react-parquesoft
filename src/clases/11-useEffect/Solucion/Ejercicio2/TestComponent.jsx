import { useEffect } from "react"

function TestComponent() {

  useEffect(() => {
    console.log("Activo")
    
    return () => {
      console.log("Desactivo")
    }
  }, [])

  return (
    <div> 2 </div>
  )
}

export default TestComponent