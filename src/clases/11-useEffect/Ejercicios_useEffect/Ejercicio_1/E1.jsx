import { useEffect } from "react"

function Ejercicio1() {
  useEffect(() => {
    console.log('Hola_Mundo')
  }, [])

  return (
    <div>
      Hola_Mundo
    </div>
  )
}

export default Ejercicio1