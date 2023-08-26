//Crear un componente con props
//Crea una función o componente que reciba title como props.
//La función o componente debe renderizar un h3 con el valor de title.
//Prueba el comportamiento de la función o componente con los siguientes ejemplos:
//<NombreComponente title="Géneros" />
//<NombreComponente title="Actores" />

const Card = (props) => {
    return (
      <div className="card">
        {props.title ? <h1>{props.title}</h1> : undefined}
        <div className="card-body">{props.children}</div>
        {props.footer ? (
          <div className="card-footer">{props.footer}</div>
        ) : undefined}
      </div>
    );
  };
  
  export default Card;
