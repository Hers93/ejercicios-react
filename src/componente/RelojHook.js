import React, {useEffect, useState} from 'react'

const Reloj = ({hora})  => <h3>{hora}</h3>

function RelojHook() {
  const [hora,setHora] = useState(new Date().toLocaleTimeString())
  const [visible,setVisible] = useState(false)
/* 
  const tictac = ({valor}) => setVisible(valor) */

  useEffect(() =>{
        let temporizador;
        if(visible){
            temporizador = setInterval(() =>{
                setHora(new Date().toLocaleTimeString())
            },1000)
        }else{
            clearInterval(temporizador)

        }
        return() => {
         
            clearInterval(temporizador)
        }
    },[visible])

  return (
    <>
        <h1>Reloj con hook</h1>
        {visible && <Reloj hora={hora}/>}
        <button onClick={() => setVisible(true)}>iniciar</button>
        <button onClick={() => setVisible(false)}>detener</button>
    </>
  )
}

export default RelojHook