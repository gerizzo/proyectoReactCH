import { useEffect, useState } from "react"
import Data from "./../../data/data.json"
import { Item } from "./../item/Item"

export const ItemList = () => {
    const [catalogo, setCatalogo] = useState (null)
    useEffect(() => {
        const promesas = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Data) {
                    resolve(Data)
                } else {
                    reject('RECHAZADO')
                }
            }, 1000);
        })
        .then (result => {
            setCatalogo(result)
        })
        .catch(err => {
            console.error(err)
        })
    })

    
    return (
        <div style={{display:"flex"}}>
            {catalogo && catalogo.map(item => {
                {console.log(item)}
                return <Item producto={item} />
            })}
        </div>
    )
}
