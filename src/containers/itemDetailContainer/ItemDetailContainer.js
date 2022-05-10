import { ItemDetail } from "../../components/itemDetail/ItemDetail";
import { useLocation } from "react-router-dom";

export const ItemDetailContainer = () => {
    const location = useLocation()
    return(
        <div className="text-center">
            <ItemDetail stock={location.state.stock} color={location.state.color} id={location.state.id} nombre={location.state.nombre} img={location.state.img} precio={location.state.precio} tipoPrenda={location.state.tipoPrenda}/>
        </div>
    )
}