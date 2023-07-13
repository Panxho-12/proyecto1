'use client'
import React, { useState } from 'react'
import { Persona } from '../Interfaces';
import { registrarPersona } from '../Firebase/Promesas';

export default function Formulario() {

    const [nombre,setNombre] = useState<string>('');
    const [apellido,setApellido] = useState<string>('');
    const [edad,setEdad] = useState<number>(0);
    const [errorEdad,setErrorEdad] = useState('');
    const registrar = ()=>{
        if(edad>0){
            console.log("Nombre:",nombre)
            console.log("Apellido:",apellido)
            console.log("Edad",edad)
            alert("Bienvenido"+nombre+" "+apellido+" Edad: "+edad)
            const p:Persona = {
                nombre,apellido,edad
            }
            registrarPersona(p)
        }else{
            setErrorEdad("La edad debe ser positiva")
        }
 
    }
  
    return (
    <form>
        <label>Nombre:</label>
        <input type='text' onChange={(e)=>setNombre(e.target.value)}/>

        <label>Apellido:</label>
        <input type='text' onChange={(e)=>setApellido(e.target.value)}/>

        <label>Edad:</label>
        <input type='number' onChange={(e)=>setEdad(parseInt(e.target.value))}/>
        <span>{errorEdad}</span>

        <button onClick={registrar} type='button'>Registrar</button>
    </form>
  )
}
