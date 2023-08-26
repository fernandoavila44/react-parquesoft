import users from '@/fakeApi/users.json'

const practica02 = () => {
 //EJERCICIO 1
  console.log(users[0].email)
  console.log(users[2].apodo)
  console.log(users[2].mascotas[1].color)

//EJERCICIO 2
  const [first, , , fourth] = users

  const { email, mascotas } = first

//EJERCICIO 3

  const copia = [...mascotas, { apodo: 'Nami', edad: 2, color: 'negro' }]

  console.log(copia)

//Ejercicio 4

  function getUserNameAndPets({ apodo, mascotas }) {
    return `El Usuario ${apodo} tiene ${mascotas.length} mascotas`
  }


  const usersWithMoreThanOnePet = users.filter((user) => user.mascotas.length > 1)

//EJERCICIO 5

  const usersWithMoreThanOnePetString = usersWithMoreThanOnePet.map((user) =>
    getUserNameAndPets(user)
  )
  console.log(usersWithMoreThanOnePetString)


  const totalPets = users.reduce((acc, user) => {
    return acc + user.mascotas.length
  }, 0)
  console.log(totalPets)
}

export default practica02
