'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Component } from 'react'
import { Componente1 } from './componentes/Componente1'
import Formulario from './componentes/Formulario'
import { AppRouter } from './Router/AppRouter'
import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer'

import {BrowserRouter} from 'react-router-dom'
import App from 'next/app'
export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Header/>  
        <AppRouter/> 
        <Footer/>
      </BrowserRouter>
    </>
  )
}
