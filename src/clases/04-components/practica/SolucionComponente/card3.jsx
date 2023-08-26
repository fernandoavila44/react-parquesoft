const Card = (props) => {
    return (
      <div className="card">
        {props.title && (
          <div className="card-title">
            <h3>{props.title}</h3>
          </div>
        )}
        <div className="card-body">{props.children}</div>
        {props.footer && <div className="card-footer">{props.footer}</div>}
      </div>
    );
  };
  
  export default Card;