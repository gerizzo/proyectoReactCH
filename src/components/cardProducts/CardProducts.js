import {Card}from "react-bootstrap"
import { ItemCount } from "../itemCount/ItemCount"
import { styles } from "./styles"

export const CardProducts = (props) => {
    return (
      <Card style={styles.card}>
        <Card.Img variant="top" src={props.img} style={styles.altura}/>
        <Card.Body>
          <Card.Title>{props.nombre} {props.color}</Card.Title>
          <Card.Title>{props.precio}</Card.Title>
          <ItemCount stock={props.stock}></ItemCount>
        </Card.Body>
      </Card>
  )
}