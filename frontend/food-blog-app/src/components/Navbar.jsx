import React,{useState}from 'react'

import Modal from "./Modal";
export default function Navbar(){
  const [isOpen,setIsOpen]=useState(false);
  const checkLogin=()=>{
    setIsOpen(true);
  }
  return(
    <>
    <header>Food Blog
    <ul>

      <li>Home</li>
      <li>My Recipe</li>
      <li>Favrouites</li>
      <li onClick={checkLogin}>Login</li>
      <li>Logout</li>
          </ul>
          </header>
            { (isOpen)&& <Modal onClose={()=>setIsOpen(false)}/>}
    </>
  )
}