import {Card} from "react-bootstrap"
import { ItemCount } from "../itemCount/ItemCount"
import { styles } from "./styles"
import { Link } from 'react-router-dom'


export const Item = ({producto}) => {
    return (
    <div>
      <Card style={styles.card}>
        <Card.Img variant="top" alt="imagenbuzo" src={producto.img} style={styles.altura}/>
        <Card.Body>
          <Card.Title>{producto.nombre} {producto.color}</Card.Title>
          <Card.Title>$ {producto.precio}</Card.Title>
          <ItemCount stock={producto.stock} id={producto.id}></ItemCount>
          <br/>
          <Link to={`/detalles/${producto.id}`} state={producto} className="btn btn-success">Detalles Producto</Link>
        </Card.Body>
      </Card>
    </div>
    ) 
}