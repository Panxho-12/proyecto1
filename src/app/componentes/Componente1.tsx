import React from 'react'
import "../assets/css/Componente1.css"
interface Props{
    nombre?:string
    apellido?:string
}
export const Componente1 = (props:Props) => {
  return (
    <div className="componente1-fondo">
        <p>holaaa {props.nombre} {props.apellido}</p>
        <p>chaooo</p>
    </div>
  )
}
