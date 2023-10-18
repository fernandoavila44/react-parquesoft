import styles from './List.module.css';

//Crea un componente Lista que renderice un ul y que reciba una prop children

function List(props) {
  return (
    <ul className={styles.list}>
      {props.children}
    </ul>
  );
}

export default List;
