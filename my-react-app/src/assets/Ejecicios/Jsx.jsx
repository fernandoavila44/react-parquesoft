import movies from '@/fakeApi/movies.json'
import Header from './components/Header'


function peliculas (edad) {
    
console.log(`la edad mínima para ver esta pelicula es de ${edad} años`)
  }
  return (
    <div>
      <Header />
      <h1>{movies[0].name}</h1>
      <p>
        {movies[0].genre}
      </p>
      <button
        onClick={() => peliculas (movies[0].edad_minima)}
      >
        Ver película
      </button>
    </div>
  )


