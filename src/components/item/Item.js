import {Card} from "react-bootstrap"
import { ItemCount } from "../itemCount/ItemCount"
import { styles } from "./styles"


export const Item = (producto) => {
    console.log(producto);
    return (
    <div>
      <Card style={styles.card}>
        <Card.Img variant="top" src={producto.img} style={styles.altura}/>
        <Card.Body>
          <Card.Title>{producto.nombre} {producto.color}</Card.Title>
          <Card.Title>{producto.precio}</Card.Title>
          <ItemCount stock={producto.stock}></ItemCount>
        </Card.Body>
      </Card>
    </div>
    ) 
     

    
}