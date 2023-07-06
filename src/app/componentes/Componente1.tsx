import React from 'react'
interface Props{
    nombre:string
    apellido?:string
}
export const Componente1 = (props:Props) => {
  return (
    <div>
        <p>holaaa {props.nombre} {props.apellido}</p>
        <p>chaooo</p>
    </div>
  )
}
