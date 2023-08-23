import users from '@/fakeApi/users.json'

const practica01 = () => {

  //Ejercicio 1
  console.log(users[0].email)

  console.log(users[2].apodo)

 console.log(users[2].mascotas[1].color)
 console.log(users.length)

  //Ejercicio 2
  const [uno, , , cuarto] = users

  const { email, mascotas } = uno

//Ejercicio 3

  const copia = [...mascotas, { apodo: 'Nami', edad: 2, color: 'negro' }]

  console.log(copia)

 //Ejercicio 4

  function getUserNameAndPets({ apodo, mascotas }) {
    return `El usuario ${apodo} tiene ${mascotas.length} mascotas`
  }

  // Ejercicio 5
  
  const usersWithMoreThanOnePet = users.filter((user) => user.mascotas.length > 1)

  const usersWithMoreThanOnePetString = usersWithMoreThanOnePet.map((user) =>
    getUserNameAndPets(user)
  )
  console.log(usersWithMoreThanOnePetString)

  const totalPets = users.reduce((acc, user) => {
    return acc + user.mascotas.length
  }, 0)
  console.log(totalPets)


}

console.log("prueba actualizacion")
export default practica01
