import movies from '@/fakeApi/movies.json'
import Header from './components/Header'

function Practica02() {
  function edad_minima(edad) {
    console.log(`Edad Minima ${edad} años`)
  }
  return (
    <div>
      <Header />
      <FirtsMovie />
      <GenederMovie />
      
      <button
        onClick={() => edad_minima(movies[0].edad_minima)}
      >
        Ver Pelicula
      </button>
    </div>
  )
}

const FirtsMovie = () =>{
  return <h1>Titulo de la primer pelicula: {movies[0].nombre}</h1>
}

const GenederMovie = () =>{
  return <p>El Genero de la Primer Pelicula es: {movies[0].genero}</p>
}


export default Practica02
