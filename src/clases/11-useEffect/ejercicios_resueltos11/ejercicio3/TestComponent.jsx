import { useEffect } from "react";

function TestComponent(props) {
  useEffect(() => {
    if (props.value) {
      console.log(`buscando datos en api.github.com/users/${props.value}`);
    }
  }, [props.value]);

  return (
    <h1>{props.value}</h1>
  );
}

export default TestComponent;
