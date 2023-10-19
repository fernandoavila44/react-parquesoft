import { useEffect } from "react";

function TestComponent(props) {
  useEffect(() => {
    if (props.value) {
      console.log(`buscando datos en api.github.com/users/${props.value}`);
    }
  }, [props.value]);

  return (
    <h2>{props.value}</h2>
  );
}

export default TestComponent;