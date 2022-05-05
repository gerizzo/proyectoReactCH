import { useState } from "react"
import {styles} from "./styles.js"
import { Link } from "react-router-dom"

export const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1)
    const suma = () => {
        if (contador === stock) {
            return
        }
        setContador(contador + 1)
    }
    const resta = () => {
        if (contador === 1) {
            return
        } 
            setContador(contador - 1)
    }
    return(
        <div>
            <div className="d-flex justify-content-center">
                <button style={styles.altura} className="btn btn-primary mx-4" onClick={resta}>-</button>
                <h5 className="align-items-center">{contador}</h5>
                <button className="btn btn-primary mx-4" onClick={suma}>+</button>
            </div>

        </div>
    )
}   