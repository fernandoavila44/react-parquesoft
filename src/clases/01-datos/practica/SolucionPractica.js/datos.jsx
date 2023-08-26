//Ejercicio 1
//Muestra por consola:
//1. El email del primer Usuario.
//2. El apodo del tercer Usuario.
//3. El color de la segunda mascota del tercer Usuario.
//solución
//1.
const DatosPracticaEje1 = [
    {
        "apodo": "girasol",
        "email": "marizza@gmail.com",
        "mascotas": [
        { "nombre": "mono", "edad": 2, "color": "amarillo y blanco" },
        { "nombre": "Kirara", "edad": 1, "color": "cafe" },
        { "nombre": "Relampago", "edad": 10, "color": "amarillo" }
      ]
    }
   ]
   console.log(DatosPracticaEje1[0].email)
  
  console.log(DatosPracticaEje1[0].apodo)
  
  console.log(DatosPracticaEje1[0].mascotas[1].color)
  
  //Ejercicio 2
  //Usando desestructuracion:
  //Extrae en variables el primer y cuarto elemento.
  //Extrae en variables email y mascotas del primer elemento.
  //solución
  const DatosPracticaEje2 = [
    {
          "apodo": "girasol",
          "email": "marizza@gmail.com",
          "mascotas": [
          { "nombre": "mono", "edad": 2, "color": "amarillo y blanco" },
          { "nombre": "Kirara", "edad": 1, "color": "cafe" },
          { "nombre": "Relampago", "edad": 10, "color": "amarillo" }
       ]
      }
   ]
   const [first, , , fourth] = DatosPracticaEje2
   const { email, mascotas } = first
  
    console.log(first);
    console.log(fourth);
    console.log(email);
    console.log(mascotas);
  
  
   //Ejercicio 3
  //Spread operator:
  //Haz una copia de las mascotas obtenidas arriba y agregale la mascota
  //{ "apodo": "Nami", "edad": 2, "color": "negro" }
  //solución
  const DatosPracticaEje3 = [
    {
      "apodo": "girasol",
      "email": "marizza@gmail.com",
      "mascotas": [
        { "nombre": "mono", "edad": 2, "color": "amarillo y blanco" },
        { "nombre": "Kirara", "edad": 1, "color": "cafe" },
        { "nombre": "Relampago", "edad": 10, "color": "amarillo" }
      ]
    }
  ];
  
  const { mascotas } = DatosPracticaEje3[0];
  const copyMascotas = [...mascotas, { apodo: 'Nami', edad: 2, color: 'negro' }];
  console.log(copyMascotas);
  
   //Ejercicio 4
  //String builder
  //Crea una funcion que reciba por props un objeto con las siguientes keys: name, cantMascotas y que retorne un string con el siguiente formato:
  //"El Usuario {name} tiene {cantMascotas} mascotas"
  // solución
  const DatosPracticaEje4 = [
    {
          "apodo": "girasol",
          "email": "marizza@gmail.com",
          "mascotas": [
          { "nombre": "mono", "edad": 2, "color": "amarillo y blanco" },
          { "nombre": "Kirara", "edad": 1, "color": "cafe" },
          { "nombre": "Relampago", "edad": 10, "color": "amarillo" }
       ]
      }
   ]
   const mensajeUsuarioMascotas = ({ name, cantMascotas }) => {
    return `El Usuario ${name} tiene ${cantMascotas} mascotas`;
  };
  
  
  //Ejercicio 5
  //Array functions
  //Usando la operacion filter, crea un array con los Usuarios que tengan mas de 1 mascota.
  //Usando la operacion map y la funcion del ejercicio 4, crea un array de strings con el apodo y la cantidad de mascotas de cada Usuario filtrado anteriormente. Ej:
  
  //[
    //7"El Usuario Gaby tiene 3 mascotas",
    //"El Usuario Morgi tiene 5 mascotas"
  //]
  //Usando la operacion reduce devuelve la cantidad total de mascotas.
  
  
  const usuario = {
    name: 'Juan',
    cantMascotas: 3
  };
  
  const usuarios = [
    {
      apodo: 'Juancho',
      email: 'juancho@gmail.com',
      mascotas: [
        { nombre: 'Firulais', tipo: 'perro', color: 'negro' },
        { nombre: 'Mauricio', tipo: 'gato', color: 'blanco' }
      ]
    },
    {
      apodo: 'Mary',
      email: 'mary@gmail.com',
      mascotas: [
        { nombre: 'Toby', tipo: 'perro', color: 'marrón' },
        { nombre: 'Tom', tipo: 'gato', color: 'naranja' },
        { nombre: 'Luna', tipo: 'gato', color: 'gris' }
      ]
    },
    {
      apodo: 'Gaby',
      email: 'gaby@gmail.com',
      mascotas: [
        { nombre: 'Rocky', tipo: 'perro', color: 'marrón' },
        { nombre: 'Pelusa', tipo: 'gato', color: 'blanco' },
        { nombre: 'Mimi', tipo: 'gato', color: 'naranja' }
      ]
    },
    {
      apodo: 'Morgi',
      email: 'morgi@gmail.com',
      mascotas: [
        { nombre: 'Paco', tipo: 'perro', color: 'blanco y marrón' },
        { nombre: 'Lilo', tipo: 'perro', color: 'negro' },
        { nombre: 'Tina', tipo: 'gato', color: 'gris' },
        { nombre: 'Simba', tipo: 'gato', color: 'naranja' },
        { nombre: 'Felix', tipo: 'gato', color: 'blanco y negro' }
      ]
    }
  ];
  
  const usuariosConMasDeUnaMascota = usuarios.filter(function(usuario) {
    return usuario.mascotas.length > 1;
  });
  
  const apodosYMascotas = usuariosConMasDeUnaMascota.map(function(usuario) {
    const cantidadDeMascotas = contarMascotas(usuario.mascotas);
    return `El Usuario ${usuario.apodo} tiene ${cantidadDeMascotas} mascotas`;
  });
  
  const cantidadTotalDeMascotas = usuarios.reduce(function(acumulador, usuario) {
    return acumulador + usuario.mascotas.length;
  }, 0);
  
  console.log(usuariosConMasDeUnaMascota);
  console.log(apodosYMascotas);
  console.log(cantidadTotalDeMascotas);
  
  function contarMascotas(mascotas) {
    return mascotas.length;
  }