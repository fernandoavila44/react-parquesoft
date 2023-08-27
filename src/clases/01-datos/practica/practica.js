import users from '@/fakeApi/users.json'

const practica = () => {
 // 1
 //email del primer Usuario.
  console.log(users[0].email)
  //apodo del tercer Usuario.
  console.log(users[2].apodo)
  //El color de la segunda `mascota` del tercer Usuario.
  console.log(users[2].mascotas[1].color)

//2
  const [first, , , fourth] = users

  const { email, mascotas } = first

//3

  const copia_mascota = [...mascotas, { apodo: 'Nami', edad: 2, color: 'negro' }]
  console.log(copia_mascota)

//4

  function getUserNameAndPets({ apodo, mascotas }) {
    return `El Usuario ${apodo} tiene ${mascotas.length} mascotas`
  }


  const usersWithMoreThanOnePet = users.filter((user) => user.mascotas.length > 1)

//5

  const usersWithMoreThanOnePetString = usersWithMoreThanOnePet.map((user) =>
    getUserNameAndPets(user)
  )
  console.log(usersWithMoreThanOnePetString)


  const totalMascotas = users.reduce((acc, user) => {
    return acc + user.mascotas.length
  }, 0)
  console.log(totalMascotas)
}

export default practica