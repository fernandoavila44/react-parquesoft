import Card1 from './componentes/Card1'
import Titulo from './componentes/Titulo'
import Lista from './componentes/Lista'
import './styles.css'

const Components = () => {
    return (
        <div className='flex-column'>

            <Titulo title='Generos'></Titulo>
            <Lista>
                <li>Comedia</li>
                <li>Romance</li>
                <li>Acción</li>
            </Lista>


            <Titulo title='Actores'></Titulo>
            <Lista>
                <li>Leonardo DiCaprio</li>
                <li>Brad Pitt</li>
                <li>Tom Cruise</li>
                <li>Will Smith</li>
                <li>Julia Roberts</li>
                <li>Angelina Jolie</li>
                <li>Meryl Streep</li>
                <li>Scarlett Johansson</li>
            </Lista>
            
            <Card1>card children</Card1>
            <Card1 title='card-title'>card children</Card1>
            <Card1 title='card-title' footer='card-footer'>card children</Card1>
        </div>
    )

}

export default Components;