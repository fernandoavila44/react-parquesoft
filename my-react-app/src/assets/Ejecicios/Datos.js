const users = [
    {id1: 1, name:"Liseth", email:"liseth.herazoc@hotmail.com", apodo:"liche", 
    pets: [
    {mascota:"neron", color:"rojo", edad:"5"},
    {mascota:"chocolate", color:"cafe", edad:"3"}
    ]},     
    {id2: 2, name:"Carlos", email:"carlos.contreras@hotmail.com", apodo:"carli",
    pets: [
    {mascota:"billy", color:"verde", edad:"1"},
    {mascota:"sulay", color:"rosa", edad:"2"}
    ]},
    {id3: 3, name:"Juan", email:"Juan.carlos@hotmail.com", apodo:"juancho",
    pets:[
    {mascota:"chanda", color:"amarillo", edad:"3"},
    {mascota:"luna", color:"blanco", edad:"1"}
    ]},
    {id4: 4, name:"Paola", email:"Pao.marin@hotmail.com", apodo:"Pao",
    pets:[
    {mascota:"lola", color:"naranja", edad:"4"},
    {mascota:"cielo", color:"azul", edad:"5"}
    ]}
]

Console.log(users[0].email)

Console.log(users[2].apodo)

Console.log(users[2].pets[1].color)

const [id1,,,id4] = users

const {email, mascota} = id1

const newmascota = [...mascota, {apodo:"Nami", color:"negro", edad:"2"}]

Console.log(newmascota)

function userDetails ({ name, pets }) {
    return `El Usuario ${name} tiene ${pets.length} mascotas`
  }

const filtroUsers = users.filter((user) => user.pets.length > 1)  

const newFiltro = filtroUsers.map((user) =>
  userDetails(user)
)
console.log(newFiltro)  

const totalMascotas = users.reduce((total, user) => total + user.pets.length, 0);

console.log("Cantidad total de mascotas:", totalMascotas)