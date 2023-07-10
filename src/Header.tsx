import React from 'react';
import "./header.css"
import { MdOutlineCelebration } from 'react-icons/md';

export default function Header({reiniciarPartida,ganador,intentos}: {reiniciarPartida:any,ganador:boolean,intentos:number}) {
    return(
        <div className="header" style={{backgroundColor:"black",height:"65px",display:"flex",flexFlow:"wrap",alignContent:"center"}}>
            <div style={{minWidth:"120px",width:"calc(10% + 120px)",height:"100%",display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
                <button style={{marginLeft:"4px"}} onClick={()=>{reiniciarPartida()}}>REINICIAR</button>
            </div>
            <div style={{width:"calc(70% - 120px)",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
            {ganador&&<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><MdOutlineCelebration style={{transform: "rotateY(180deg)"}}/><p style={{marginLeft:"5px",marginRight:"5px",fontSize:"20px"}}>GANASTE</p><MdOutlineCelebration/></div>}
            </div>
            <div style={{width:"20%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px"}}>Intentos: {intentos}</div>
        </div>
    )
}