import React from 'react';
import "./carta.css"
import ReactCardFlip from "react-card-flip";
export default function Carta({icono,comparando,adivinada,seleccionarCarta}: {icono: any,comparando:boolean,adivinada:boolean,seleccionarCarta:any}) {
    
    return(
        <div className="carta" onClick={seleccionarCarta}>
            <ReactCardFlip isFlipped={comparando || adivinada}>
                <div className="portada" key="front"></div>
                <div className="contenido" key="back">
                    <i className={`fa ${icono} fa-5x`}></i>
                </div>
            </ReactCardFlip>
        </div>
    )
}