import practica01 from ".";
import users from '@/fakeApi/users.json'


function EmptyApp() {
//practica01();

//Usando desestructuracion:
//Extrae en variables el primer y cuarto elemento.
const [uno, , ,cuatro] = users
//Extrae en variables email y mascotas del primer elemento.
const {email, mascotas} = uno
//Spread operator:
//Haz una copia de las mascotas obtenidas arriba y agregale la mascota
//{ "apodo": "Nami", "edad": 2, "color": "negro" }
//(Usar console log para verificar que no se modifico el original)
const copia = [...mascotas, { "apodo": "Nami", "edad": 2, "color": "negro" }]
// crea una funcion que reciba por props un objeto con las siguientes keys: **name**, **cantMascotas** y que retorne un string con el siguiente formato
// '"El Usuario {name} tiene {cantMascotas} mascotas"'
function getUsuarioNombreMascota({ name, cantMascotas}){
  return `El Usuario ${name} tiene ${cantMascotas.length} mascotas`
}
// usando la operacion 'filter', crea un array con los Usuarios que tengan **mas** de 1 mascota
const usuarioConMasDeUnaMascota = users.filter((user) => user.mascotas.length > 1)
  return (
    <>
      👀 open console -&gt; F12

      <p>Muestra:
        el 'email' del primer Usuario</p>
      <h1>{users[0].email}</h1>

      <p>el 'apodo' del tercer Usuario</p>
      <h1>{users[2].apodo}</h1>

      <p>el color de la segunda 'mascota' del tercer Usuario</p>
      <h1>{users[2].mascotas[1].color}</h1>

      <p>Ejercicio 3</p>
      <h1>Resultado por consola</h1>
      {console.log(copia)}
    </>
  );
}

export default EmptyApp;