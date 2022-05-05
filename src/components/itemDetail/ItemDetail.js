import { FaMegaport } from 'react-icons/fa';

export const ItemDetail = (props) => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src={props.img}></img>
                </div>
                <div className="col-6">
                    <h2>{props.nombre} {props.color}</h2>
                    <p><strong><FaMegaport/>  RECOMENDADO  <FaMegaport/></strong></p>
                    <br></br>
                    <p>Stock Disponible: {props.stock}</p>
                    <p>Tipo De Prenda: {props.tipoPrenda}</p>
                    <h2>${props.precio}</h2>
                    <br></br>
                    <button className='btn btn-success'>COMPRAR</button>
                </div>
            </div>
        </div>
    )
}