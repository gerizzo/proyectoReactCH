import React from "react"; 

export const ItemListContainer=(props)=>{
    return(
        <div className="d-flex justify-content-center mt-5">
            <h2>Estado del sitio: {props.estado}</h2>
        </div>
    );
}

