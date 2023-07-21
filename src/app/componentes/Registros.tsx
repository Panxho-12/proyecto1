import React, { use, useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { Persona } from '../Interfaces'

export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])

    const renderizarDatos = ()=>{
        var elementos = personas.map((p)=>{
            return <tr>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.edad}</td>
            </tr>
        })
        return elementos
    }



    useEffect(()=>{
        //Cargar los datos de firebase
        obtenerPersonas().then((listado)=>{
            console.log("Cargando listado")
            console.log(listado)
            setPersonas(listado)
        })      
    },[])

  return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}
