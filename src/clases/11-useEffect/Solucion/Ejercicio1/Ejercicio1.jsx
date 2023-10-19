import { useEffect } from "react"

function holaMundo() {
  useEffect(() => {
    console.log('Hola mundo');
  }, []); 

  return (
    <div>
      {}
    </div>
  );
}
export default holaMundo