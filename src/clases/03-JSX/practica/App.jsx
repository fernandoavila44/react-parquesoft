import movies from '@/fakeApi/movies.json'
import Header from './components/Header'

function Practica02() {
  function edad_minima(edad) {
    <div>Edad minima {edad} años</div>
    alert(`Edad Minima ${edad} años`)
  }
  return (
    <div>
      <Header />
      <FirtsMovie />
      <GenderMovie />
      
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

const GenderMovie = () =>{
  return <p>El Genero de la Primer Pelicula es: {movies[0].genero}</p>
}


export default Practica02
