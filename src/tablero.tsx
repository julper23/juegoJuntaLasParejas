import React from 'react';
import "./tablero.css"
import Carta from './carta';

export default function Tablero({baraja,parejaSeleccionada,seleccionarCarta}: {baraja: any,parejaSeleccionada:any,seleccionarCarta:any}) {
    return(<div style={{width:"100%",minHeight:"calc(100vh - 65px)", display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{minHeight:"550px",maxHeight:"550px",minWidth:"700px",maxWidth:"700px",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            {
                baraja.map((carta: any,index:number)=>{
                    const estaSiendoComparada = (parejaSeleccionada.indexOf(carta)!=-1);
                    return<Carta key={index} icono={carta.icono} adivinada={carta.adivinada} comparando={estaSiendoComparada} seleccionarCarta={() => seleccionarCarta(carta)}/>
                })
            }
        </div>
    </div>
        
    )
}

/*<div className="tablero">
            {
                baraja.map((carta: any,index:number)=>{
                    const estaSiendoComparada = (parejaSeleccionada.indexOf(carta)!=-1);
                    return<Carta key={index} icono={carta.icono} adivinada={carta.adivinada} comparando={estaSiendoComparada} seleccionarCarta={() => seleccionarCarta(carta)}/>
                })
            }
        </div>*/