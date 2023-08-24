function Tarjeta (props){
    return (
        <div>
            {props.titulo ? <h1>{props.titulo} </h1>:undefined}
            {props.children}
            {props.footer ? <div>{props.footer}</div> : undefined}
        </div>
    )
}
export default Tarjeta