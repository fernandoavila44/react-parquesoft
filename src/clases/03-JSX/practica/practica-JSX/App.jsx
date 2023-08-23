import Entrada from './components/entrada'
import './App.css'

function verClick(value){
  console.log("click",value)
}
function App() {
  return (
    <div>
      <Entrada/>
      <h1>Rougue One</h1>
      <p>Genero: Acción - Space Opera </p>
      <button onClick={() => verClick('Para mayores de 14 años')}>VER</button>
    </div>
  )
}
export default App