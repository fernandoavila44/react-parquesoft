//Usando la siguiente data
//Dentro de App renderiza los siguientes elementos:
//Un componente Header con el nombre y el logo de la pagina.
//un h1 con el titulo de la primera pelicula.
//un p con el genero de la primera pelicula.
//un button para ver la pelicula (cuando se hace click tiene que mostrar la edad minima recomendada por consola).
//se debe pasar el valor por parametro a la funcion

const Header = () => {
  return (
    <header>
      <h1>La peli</h1>
      <img src="/sburb.svg" width="50px" height="50px" alt='Sburb' />
    </header>
  )
}

export default Header

import React from 'react';
import Header from './components/Header';

const movie = {
  title: 'La Monja',
  genre: 'Terror',
  ageRating: 18
};

function App() {
  function showAgeRating(age) {
    console.log(`La edad mínima recomendada para ver "${movie.title}" es ${age} años.`);
  }

  return (
    <div>
      <Header name="Mi Cine" logoUrl="https://example.com/micine-logo.png" />
      <h1>{movie.title}</h1>
      <p>Género: {movie.genre}</p>
      <button onClick={() => showAgeRating(movie.ageRating)}>Ver película</button>
    </div>
  );
}

export default App;
