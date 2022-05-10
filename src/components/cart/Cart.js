import { useLocation } from "react-router-dom";

export const Cart = () => {
    const location = useLocation() 
    console.log(location.state);
    return(
        <div className="text-center mt-5">
            <h1>Tu Carrito:</h1>
            <p>1- {location.state.nombre} {location.state.color} |  <strong>$ {location.state.precio}</strong></p>
        </div>
    )
}
  /*  */