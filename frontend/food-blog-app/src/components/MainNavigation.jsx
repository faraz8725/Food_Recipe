import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom' 
export default function MainNavigation(){
  return(
    <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}