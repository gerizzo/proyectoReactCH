
import { FaMegaport } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ItemCount } from '../itemCount/ItemCount';

export const ItemDetail = (props) => {
    
    const onAdd = (cantidad) => {
        console.log(cantidad);
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={props.img} alt={`img-${props.nombre}`}></img>
                </div>
                <div className="col-6">
                    <h2>{props.nombre} {props.color}</h2>
                    <p><strong><FaMegaport/>  RECOMENDADO  <FaMegaport/></strong></p>
                    <br></br>
                    <p>Stock Disponible: {props.stock}</p>
                    <p>Tipo De Prenda: {props.tipoPrenda}</p>
                    <h2>${props.precio}</h2>
                    <br></br>
                    <ItemCount stock={props.stock} onAdd={onAdd}></ItemCount> 
                    <br></br>   
                    <Link to={`/cart`} state={props} className="btn btn-success">Finalizar Compra</Link>
                </div>
            </div>
        </div>
    )
}