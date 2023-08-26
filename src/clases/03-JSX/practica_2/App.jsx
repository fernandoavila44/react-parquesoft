import movies from '@/fakeApi/movies .json'
import Header from './componentes/Header1'

Function ejercicio2(){

    function piratear(edad) {
        console.log(`Asegurate de tener ${edad} años`);
    }

    return (
        <div>
          <Header1></Header1>  
            <h1>{movies[0].name}</h1>
            <p>
                {movies[0].genre}
            </p>
            <button onClick={() => piratear(movies[0].edad_minima)}>
                ver pirata       
            </button>    
        </div>
    )
    
}