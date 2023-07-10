import { useState } from 'react'
import './App.css'
import Tablero from './tablero'
import construirBaraja from './utils/construirBaraja'


function App() {
  const [bajara,setBaraja] = useState(construirBaraja())
  const [comparando,setComparando] = useState(false)
  const [pareja,setPareja] = useState<any[]>([])
  const [ganador,setGanador] = useState(false)
  const [intentos,setIntentos] = useState(0);


  
  const compararPareja = (parejaSeleccionada:any) => {
    setComparando(true)
    setTimeout(() => {
      const [primeraCarta,segundaCarta] = parejaSeleccionada;
      let baraja2 = bajara;
      console.log(baraja2);
      
      if(primeraCarta.icono === segundaCarta.icono){
        baraja2 = baraja2.map((carta)=>{
          if(carta.icono !== primeraCarta.icono){
            return carta
          }
          return {...carta,adivinada:true};
        })
      }

      setPareja([])
      setBaraja(baraja2)
      setComparando(false)
      verificarGanador(baraja2)
      setIntentos(intentos+1)
    },1000)
  }

  const verificarGanador = (baraja:any) => {
    if(
      baraja.filter((carta:any)=>!carta.adivinada).length === 0
      ){
        setGanador(true)
      }
  }

  const reiniciarPartida = () => {
    setBaraja(construirBaraja())
    setComparando(false)
    setPareja([])
    setGanador(false)
    setIntentos(0)
  }

  const seleccionarCarta = (carta:any) => {
    if(comparando||pareja.indexOf(carta)>-1||carta.adivinada){
      return;
    }

    const parejaSeleccionada= [...pareja,carta]
    setPareja(parejaSeleccionada)
    if(parejaSeleccionada.length===2){
      compararPareja(parejaSeleccionada)
    }
  }


  //Añadir contador de intentos


  return (<div>
    <div> 
      <button onClick={()=>{reiniciarPartida()}}>REINICIAR</button>
      <h2>Intentos: {intentos}</h2>
      {ganador&&<h1>GANASTE</h1>}
    </div>
    <Tablero baraja={bajara} parejaSeleccionada={pareja} seleccionarCarta={(carta: any)=>seleccionarCarta(carta)}/>
  </div>)
}

export default App
