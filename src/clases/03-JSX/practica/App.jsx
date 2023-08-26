
import movies from '@/fakeApi/movies.json'
import Header from './components/Header'

function Practica02() {
  function edad_minima(age) {
    <div>Edad minima {age} years</div>
    alert(`Min age ${age} years`)
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
  return <h1>Firts Movie Name {movies[0].nombre}</h1>
}

const kindMovie = () =>{
  return <p>Kind the movie  {movies[0].genero}</p>
}

export default Practica02