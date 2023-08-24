import users from '@/fakeApi/users.json'

const ejercicios =() => {
    console.log(users [0].email)
    console.log(users[2].apodo)
    console.log(users[2].mascotas[1].color)

    const[userUno, , ,userCuarto]=users
    const{email,mascotas}=userUno

    const copia=[...mascotas,{apodo: "nami", edad: 2, color:"negro"}]
    console.log (copia)

    function veterinaria({apodo,mascotas}) {
        return `El Usuario ${apodo} tiene ${mascotas.length} mascotas`

    }
    const personaConMascotas=users.filter((persona) => persona.mascotas.length > 1)
    console.log(personaConMascotas)

    const personasMascotasArray=personaConMascotas.map((persona)=> veterinaria (persona))
    console.log(personasMascotasArray)

    const mascotasTotal= users.reduce((red, persona) => {
        return red + persona.mascotas.lenght
    },0 )
    console.log(mascotasTotal)

}
export default ejercicios




