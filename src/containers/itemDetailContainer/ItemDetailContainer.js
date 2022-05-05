import { ItemDetail } from "../../components/itemDetail/ItemDetail";
import { useParams, useLocation } from "react-router-dom";

export const ItemDetailContainer = () => {
    const location = useLocation() 
    console.log(location.state.stock);
    return(
        <div className="text-center">
            <ItemDetail stock={location.state.stock} color={location.state.color} id={location.state.id} nombre={location.state.nombre} img={location.state.img} precio={location.state.precio} tipoPrenda={location.state.tipoPrenda}/>
        </div>
    )
}